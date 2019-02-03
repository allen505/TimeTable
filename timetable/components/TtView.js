import React, { Component } from 'react'
import { View } from 'react-native'
import {CheckBox, Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

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

        let col1 = ['8:30-9:30','9:30-10:30','10:30-10:45',
            '10:45-11:45','11:45-12:45','12:45-1:30',
            '1:30-2:30','2:30-3:30','3:30-4:30'];
        let col2 = ['Class','Class','Tea Break',
            'Class','Free','Lunch Break',
            'Free','Class','Free'];
        let free = RegExp('Free');
        let Break = RegExp('.*Break');
        let rows = [];      

        for(let i=0 ; i<9 ; i++){
			let cols = []
			let key="t"+i;
			cols.push(<Text style = {timetext} key={key}> {col1[i]} </Text>)
            if( free.test(col2[i] ) == true ){
				key="b"+i;
                cols.push(
                    <Button
                        disabled
                        key= {key}
                        title={col2[i]}
                        type="solid"
                    />
                )
            }
            else if ( Break.test(col2[i] ) == true ) {
                cols.push(
                    <Button
                        disabled
                        key= {i}
                        title={col2[i]}
                        type="outline"
                        icon={
                            <Icon name="ios-close-circle-outline" size={24}/>
                        }
                    />
                )
            }
            else{
                cols.push(
                    <CheckBox
                        key= {i}
                        title={col2[i]}
                        checked={this.state.selected[i]}
                        onPress={() => this.onSelection(i)}
                    />
                )
			}
			rows.push(<View key={i} style={styles.ttView}>{cols}</View>)
        }
        

        return(
            <View style={ttView}>

                {rows}   
            
            </View>
       );
   }
}
export default TtView