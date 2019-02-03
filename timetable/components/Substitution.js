import React, { Component } from 'react'
import{
    View,
    ScrollView,
    Text,
    Button,
    Alert
} from 'react-native'
import { createStackNavigator} from 'react-navigation';
import TtView from './TtView'
import DateTimePickerTester from './timePicker'
import Status from './Status'

import styles from '../style'

class Substitution extends Component{
 static navigationOptions = {
        title: 'Pick a class',
   
    }
    
    constructor(props){
        super(props);
    }

    render(){
        const {container} = styles
        return(  

      
            <ScrollView style ={container}>
        <DateTimePickerTester />
        <TtView />
             <Button
        title="Next"
        onPress={() => this.props.navigation.navigate('Substitution2')}
        />
            </ScrollView>
        );
    }
}

_okfunc = () =>{
    console.log('OK Pressed!');
    <Status />
};

class Substitution2 extends Component{
      static navigationOptions = {
        title: 'Pick a teacher',
        headerRight: (
      <Button
        onPress={() => Alert.alert(
          'Confirmation',
          'Do you wish to substitute the selected classes and notify the teacher?',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            {text: 'OK', onPress: () => _okfunc()},
          ],
          { cancelable: false }
        )}
        title="Confirm"
         />
    )
    }
 

    
    constructor(props){
        super(props);
    }


    render(){
        const {container} = styles
        return(
             <View style={container}>
            <Text>This is Substitution2 Component</Text>
            </View>
        );
    }
}

export default createStackNavigator({
   home: Substitution,
   Substitution2: Substitution2,
});



