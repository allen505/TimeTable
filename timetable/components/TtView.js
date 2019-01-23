import React, { Component } from 'react'
import { View } from 'react-native'
import { ButtonGroup, Button } from 'react-native-elements'

import styles from '../style'

class TtView extends Component{
    constructor(props){
        super(props);
        this.state={
            selected:[],
        };
    }

    updateSelected = selected => {
        this.setState({ selected });
    };
    
    render(){
        const {container} = styles

        let col1 = ['8:30-9:30','9:30-10:30','10:30-10:45',
            '10:45-11:45','11:45-12:45','12:45-1:30',
            '1:30-2:30','2:30-3:30','3:30-4:30'];
        let col2 = ['Class','Class','Tea Break',
            'Class','Free','Lunch Break',
            '','Class','Free'];
        let rows = [];

        for(let i=0 ; i<9 ; i++){
            rows.push(
                <ButtonGroup
                    buttons={[col1[i],col2[i]]}
                    selectMultiple
                    selectedIndexes={this.state.selected}
                    onPress={this.updateSelected}
                />
            )
        }

        return(
            <View style={container}>

                {rows}   
            
            </View>
       );
   }
}
export default TtView