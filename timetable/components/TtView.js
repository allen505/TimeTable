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
            'Free','Class','Free'];
        let rows = [];      

        rows.push(
            <ButtonGroup
                key={0}
                buttons={[col1[0], col1[1], col1[2],
                    col1[3], col1[4], col1[5],
                    col1[6], col1[7], col1[8]]}
                selectMultiple
                selectedIndexes={this.state.selected}
                onPress={this.updateSelected}
            />
        )

        rows.push(
            <ButtonGroup
                key={1}
                buttons={[col2[0], col2[1], col2[2],
                    col2[3], col2[4], col2[5],
                    col2[6], col2[7], col2[8]]}
                selectMultiple
                selectedIndexes={this.state.selected}
                onPress={this.updateSelected}
            />
        )
        

        return(
            <View style={container}>

                {rows}   
            
            </View>
       );
   }
}
export default TtView