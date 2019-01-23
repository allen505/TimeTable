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
        this.setState({ selected }, () => {
        });
    };

    render(){
        const {container} = styles
        return(
            <View style={container}>
                <ButtonGroup
                    buttons={['One','Two','Three']}
                    selectMultiple
                    selectedIndexes={this.state.selected}
                    onPress={this.updateSelected}
                />     
               
            </View>
       );
   }
}
export default TtView