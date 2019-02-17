import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { 
  createBottomTabNavigator,
  createSwitchNavigator
 } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import {Alert, TouchableOpacity } from 'react-native';

import styles from './style'
import Timetable from './components/Timetable'
import Substitution from './components/Substitution'
import Status from './components/Status'
import Account from './components/Account'

const BottomTabNavigator = createBottomTabNavigator({
  timetable: { 
    screen:Timetable,
    navigationOptions:{
      tabBarLabel:'Timetable',
      tabBarIcon : ({ tintColor }) => (
        <Icon name="ios-grid" size={24}/>
      )
    }
  },

  substitution: {
    screen:Substitution,
    navigationOptions:{
      tabBarLabel:'Substitutions',
      tabBarIcon : ({ tintColor }) => (
        <Icon name="ios-swap" size={24}/>
      )
    }
  },

  permissionStatus: { 
    screen:Status,
    navigationOptions:{
      tabBarLabel:'Permission Status',
      tabBarIcon : ({ tintColor }) => (
        <Icon name="ios-alert" size={24}/>
      )
    }
  },

  account: { 
    screen:Account,
    navigationOptions:{
      tabBarLabel:'Account',
      tabBarIcon : ({ tintColor }) => (
        <Icon name="ios-contact" size={24}/>
      )
    }
  }
})

class WelcomeScreen extends Component{

  state = {
    username: '',
    password: '',
    auth_token: '1234'
  }
     Login = async () => {
       fetch('LOGIN DATA LINK', {
         method: 'post',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           "provider": "username",
           "data": {
             "username": this.state.username,
             "password": this.state.password
           }
         })
       }).then((response) => response.json())
         .then((res) => {
           if (typeof (res.message) != "undefined") {
             Alert.alert("Error", "Error: " + res.message);
           }
           else {
             this.setState({ auth_token: res.auth_token });
             Alert.alert("Welcome", " You have succesfully logged in");
           }
         }).catch((error) => {
           console.error(error);
         });
     }
     render(){
       //If auth token is not present
       if (this.state.auth_token == '') {
         return (
           <View style = {{
             flex: 1,
             justifyContent: "center",
             alignItems: "center"
           }}>
             <TextInput
               placeholder="Enter User name"
               onChangeText={TextInputValue =>
                 this.setState({ username: TextInputValue })}
               underlineColorAndroid='transparent'
               style={
                 {
                   textAlign: 'center',
                   width: '90%',
                   marginBottom: 7,
                   height: 40,
                   borderRadius: 5,
                   fontSize: 20,
                 }
               }
             />
             <TextInput
               placeholder="Enter password"
               onChangeText={TextInputValue =>
                 this.setState({ password: TextInputValue })}
               underlineColorAndroid='transparent'
               secureTextEntry={true}
               style={
                 {
                   textAlign: 'center',
                   width: '90%',
                   marginBottom: 20,
                   height: 40,
                   borderRadius: 5,
                   fontSize: 20,
                 }
               }
             />
              
              <View>
             <TouchableOpacity onPress={this.Login.bind(this)}>
               <View style={{
                 height: 50, 
                 width: 100,
                 backgroundColor:'#147efb', 
                 justifyContent: 'center',
                 alignItems: 'center',
                 margin: 10,
                 borderRadius: 10
               }}>
                 <Text style={{ 
                   fontSize: 20,
                   color: '#FFFFFF',
                 }}>
                   Login </Text>
               </View>
             </TouchableOpacity>
           </View>
           </View>
         );
       }
       else
       {
          return(
       <View>
            {this.props.navigation.navigate("bottomTab")}
            </View>

          );
       }
      }
    }
  
    



const SwitchNav = createSwitchNavigator({
  welcome : { screen : WelcomeScreen},
  bottomTab:{ screen : BottomTabNavigator}
})

class App extends Component {

  render() {
  
    return (
    <SwitchNav/>
    );
  }
}
export default App



