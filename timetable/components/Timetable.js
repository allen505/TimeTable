import React, { Component } from 'react'
import{
    View,
    Text,
    TouchableWithoutFeedback,
    TextInput,
    Keyboard,
} from 'react-native'


import TtView from './TtView'
import DateTimePickerTester from './timePicker'
import SearchBar from './SearchBar';
import styles from '../style'

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
        const { container, componentView } = styles
        return(        
            <DismissKeyboard>   
            <View style={container}>
                <SearchBar />
                <DateTimePickerTester />
                <TtView />
                </View></DismissKeyboard> 
        );
    }
}

export default Timetable


