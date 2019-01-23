import React, { Component } from 'react'
import{
    View,
    Text,
    Button
} from 'react-native'

import styles from '../style'
import TtView from './TtView'

class Timetable extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const {container} = styles
        return(            
            <View style={container}>
                <TtView />
                {/* <Text>This is Timetable Component</Text> */}
            
            </View>
        );
    }
}

export default Timetable


