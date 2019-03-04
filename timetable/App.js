import React, { Component } from 'react';

import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { 
createBottomTabNavigator,
createSwitchNavigator
} from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'
import { AsyncStorage } from 'react-native';

import styles from './style'
import Timetable from './components/Timetable'
import Substitution from './components/Substitution'
import Status from './components/Status'
import {Notifications, Permissions } from 'expo'


class Account extends Component{
    
    constructor(props){
        super(props);
    }

    logout = () => {
		console.log("logout is pressed");
		AsyncStorage.removeItem('userData');
		this.props.navigation.navigate('welcome');
    }

    render(){
        const {container} = styles
        return(
             <View style={{justifyContent: 'center',alignItems: "center", padding:50}}>
            <Button style={{color:'red'}}
                title="Log Out"
                onPress={() => this.logout()}></Button>
                
            </View>
        );
    }
}

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

async function register(){
  const {status}= await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if(status!=='granted'){
    alert('You need to enable permissions from settings');
    return;
  }
  const token=await Notifications.getExpoPushTokenAsync();
  console.log(status,token);
}

class WelcomeScreen extends Component{
  componentWillMount(){
    register();
  }
  
  state = {
		username: '',
		password: '',
		auth_token: '',
		
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
				AsyncStorage.setItem('token',res.auth_token);
				hasToken  = 'true';
				Alert.alert("Welcome", " You have succesfully logged in");
			}
			}).catch((error) => {
			console.error(error);
			});

	}
	tempfunc() {

		let userData={
			username:this.state.username,
			token:this.state.auth_token
		}
			
		AsyncStorage.setItem('userData',  JSON.stringify(userData))

		showdata= async () => {
		let data= await AsyncStorage.getItem('userData');
		let d= JSON.parse(data);
		Alert.alert(d.username+" has logged in");
	}
	
	showdata();
	this.props.navigation.navigate('bottomTab');
	}
	render(){
		//If auth token is not present
		if (this.state.auth_token == '') {
		return (
			<View style = {{
				flex: 2,
				justifyContent: "flex-end",
				alignItems: "center",
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
				marginBottom: 50,
				height: 40,
				borderRadius: 5,
				fontSize: 20,
				backgroundColor: "#EEEEEE"
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
				marginBottom: 50,
				height: 40,
				borderRadius: 5,
				fontSize: 20,
				backgroundColor: "#EEEEEE"
				}
			}
			/>

			


			<View>
			<TouchableOpacity onPress={() => this.tempfunc()}>
			<View style={{
				height: 50, 
				width: "70%",
				backgroundColor:'#147efb', 
				justifyContent: 'center',
				alignItems: 'center',
				margin: 50,
				borderRadius: 100
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



