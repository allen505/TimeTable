import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { 
  createBottomTabNavigator,
  createSwitchNavigator
 } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'


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
   render(){
       return(
        <View style={{
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center'
		  }}>
            <TextInput
				style={{height: 40, borderColor: 'gray', borderWidth: 1}}
				// onChangeText={(text) => this.setState({text})}
				// value={this.state.text}
			/> 
        	<Button title='Login' onPress={() => this.props.navigation.navigate('bottomTab')}/>
        </View>
       )
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



