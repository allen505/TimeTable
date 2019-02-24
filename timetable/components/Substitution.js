import React, { Component } from 'react'
import{
    View,
    ScrollView,
    Text,
    Button,
    Alert,
    Image,
    TouchableOpacity
} from 'react-native'
import {Card } from 'react-native-elements';
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

    displayCard =() => {
        var cards = [];
        let jsonmap = ['1', '2', '3','4','5'];
        jsonmap.map((data, index) => {
        
        const {container,button,display}= styles
            cards.push(
                <View style ={container}>
                <Card>
                    <View style={display}>
                        <View>
                            <Text style={{fontWeight: 'bold',fontSize:25, padding: 5}}>Teacher name</Text>
                                <Text style={{ fontWeight: '500', fontSize: 18, padding: 5}}>Department</Text>
                                <Text style={{ fontWeight: '500', fontSize: 15, padding: 5}}>Designation</Text>
                        </View>
                        <View style={{margin: 5}}>
                            <Image source={require('../assets/contact.png')} style={{width: 900, height:50}} resizeMode="contain"/>
                        </View>
                    </View>
                    <Text style = {{padding:10}}>The teacher is available for (number) of periods </Text>
                </Card>
                </View>
            )
        }
        );
        return cards;
        }
    
    render(){
        const {container,display} = styles
        return(
             <ScrollView style={container}>
                {this.displayCard()}
            </ScrollView>
        );
    }
}

export default createStackNavigator({
   home: Substitution,
   Substitution2: Substitution2,
});



