import React, { Component } from 'react'
import{
    View,
    Text,
    TouchableWithoutFeedback,
    TextInput,
    Keyboard,
} from 'react-native'

import styles from '../style'
import TtView from './TtView'
import DateTimePickerTester from './timePicker'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        { children }
    </TouchableWithoutFeedback>
);

class Timetable extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const {container, searchBar, componentView} = styles
        return(        
            <DismissKeyboard>   
            <View style={container}>
                <View style={componentView}>
                <TextInput 
                    style = {searchBar}
                    placeholder = "Search" 
                    onSubmitEditing={Keyboard.dismiss}   
                    onBlur={Keyboard.dismiss}                    
                /></View>
                <DateTimePickerTester/>
                <TtView />
                </View></DismissKeyboard> 
        );
    }
}

export default Timetable


