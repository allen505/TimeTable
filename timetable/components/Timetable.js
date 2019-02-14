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
        this.state={
            name:[]
        }
    }


    componentWillMount(){
        const url = 'https://randomuser.me/api/?results=1';
        fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then((data) => {
            this.setState({
                name :data.name
            })
            // console.log(data);
        })
    }

    render(){
        console.log(this.state.name);
        const { container, componentView } = styles;

        

        return(    
            <View style={container}>
            <View>
                <Header
                    placement="center"
                    backgroundColor="#147efb"
                    // leftComponent={<MyCustomLeftComponent />}
                    centerComponent={{ text: 'Timetable', style: { color: '#fff', fontSize: 23 } }}
                    // rightComponent={<MyCustomRightComponent />}

                    containerStyle={{
                        // backgroundColor: '#5d9aa4',
                        justifyContent: 'space-around',
                    }}
                />
                <SearchBarComponent />
                </View>

            
            <ScrollView style={container} directionalLockEnabled={true}>
               
            
                
                <DateTimePickerTester />
                <TtView />
                  
                  
                </ScrollView>
            </View>
        );
    }
}

export default Timetable


