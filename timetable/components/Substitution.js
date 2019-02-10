import React, { Component } from 'react'
import{
    View,
    ScrollView,
    Text,
    Button,
    Alert,
    Image
} from 'react-native'
import { createStackNavigator} from 'react-navigation';
import TtView from './TtView'
import DateTimePickerTester from './timePicker'
import Status from './Status'
import Cards from './Cards.js'

import styles from '../style'

class Substitution extends Component{
 static navigationOptions = {
     
        title: 'Pick a class'
        
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
          'Are you sure to notify selected teachers?',
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
        const {container,display} = styles
        return(
             <ScrollView style={container}>
             <View style={display}>
             <Cards/>
             <Cards/>
             </View>
             <View style={display}>
             <Cards/>
             <Cards/>
             </View>
             <View style={display}>
             <Cards/>
             <Cards/>
             </View>
            </ScrollView>
        );
    }
}

export default createStackNavigator({
   home: Substitution,
   Substitution2: Substitution2,
});



