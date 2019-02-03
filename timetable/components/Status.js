import React, { Component } from 'react'
import{
    ScrollView,
    Text,
} from 'react-native'

import styles from '../style'

class Substitution extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const {container} = styles
        return(
             <ScrollView style={container}>
            <Text>This is Status Component</Text>
            
            </ScrollView>
        );
    }
}

export default Substitution