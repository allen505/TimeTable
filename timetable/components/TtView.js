import React, { Component } from 'react'
import { View } from 'react-native'
import {CheckBox, Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import { Table, Row, Rows } from 'react-native-table-component';

import styles from '../style'

class TtView extends Component{
    constructor(props){
        super(props);
        this.state={
            selected:[false,false,false,false,false,false,false,false,false],
            checked: false,
        };
    }
    onSelection = (index) => {
        let newArray=this.state.selected;
        for(let i=0 ; i<9 ; i++){
            if(i==index){
                newArray[i]=!newArray[i];
            }
       }
        this.setState({
            selected: newArray,
        });
    };

    render(){
        const {container, ttView,timetext} = styles

        let Time = ['8:30-9:30','9:30-10:30','10:30-10:45',
            '10:45-11:45','11:45-12:45','12:45-1:30',
            '1:30-2:30','2:30-3:30','3:30-4:30'];
        let Subjects = ['Free','Class','Tea Break',
            'Class','Free','Lunch Break',
            'Free','Class','Free'];
        let free = RegExp('Free');
        let Break = RegExp('.*Break');
        let rows = [];     
        let i=0;
        
        for(let i=0 ; i<9 ; i++){
            let cols = []
            cols.push(<Text style={{flex:2}}> {Time[i]} </Text>)
            if( free.test(Subjects[i] ) == true ){
                key="b"+i;
                cols.push(
                    <Button
                        disabled
                        title={Subjects[i]}
                        type="solid"
                        style={{flex:5}}
                    />
                )
            }
            else if ( Break.test(Subjects[i] ) == true ) {
                cols.push(
                    <Button
                        disabled
                        title={Subjects[i]}
                        type="outline"
                        icon={
                            <Icon name="ios-close-circle-outline" size={24}/>
                        }
                        style={{flex:5}}
                    />
                )
            }
            else{
                cols.push(
                    <CheckBox
                        title={Subjects[i]}
                        containerStyle={{flex:5}}
                        checked={this.state.selected[i]}
                        onPress={() => this.onSelection(i)}
                        // onPress={() => this.setState({ checked: false })}
                    />
                )
            }
            rows[i]=<View style={{flexDirection: "row"}}>{cols}</View>;
        }

        return(
            <View style={ttView}>
                {rows}   
            </View>
       );
   }
}
export default TtView