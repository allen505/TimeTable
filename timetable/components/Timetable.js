import React, { Component } from 'react'
import{
    View,
    Text,
    TextInput,
} from 'react-native'

import styles from '../style'
import TtView from './TtView'
import DateTimePickerTester from './timePicker'

class Timetable extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const {container, searchBar, ttView, dateSelector} = styles
        return(            
            <View style={container}>
                <TextInput 
                    style = {searchBar}
                    placeholder = "Search,"    
                    
                />
                <DateTimePickerTester style={dateSelector} />
                <View style={ttView}></View> 
                <TtView />
                </View>
        );
    }
}

export default Timetable


