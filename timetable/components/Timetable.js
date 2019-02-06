import React, { Component } from 'react'
import{
    View,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import { Header } from 'react-native-elements'

import TtView from './TtView'
import DateTimePickerTester from './timePicker'
import SearchBarComponent from './SearchBarComponent';
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
            
            <ScrollView style={container} directionalLockEnabled={true}>
                <Header
                placement="center"
                // leftComponent={<MyCustomLeftComponent />}
                centerComponent={{ text: 'Timetable', style: { color: '#fff', fontSize: 23 } }}
                // rightComponent={<MyCustomRightComponent />}

                containerStyle={{
                    backgroundColor: '#5d9aa4',
                    justifyContent: 'space-around',
                  }}
            />
                <SearchBarComponent />
                <DateTimePickerTester />
                <TtView />
                </ScrollView>
        );
    }
}

export default Timetable


