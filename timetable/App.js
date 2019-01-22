import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Main from './components/MainComponent';


class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>This is App Component</Text>
        {/* <TouchableOpacity><Text>Login</Text></TouchableOpacity> */}
        {/* <Button onPress={() => this.props.navigation.navigate('Main')} title="Go to Main"></Button> */}
      </View>
    );
  }
}


export default createBottomTabNavigator({
  home: { 
    screen:App,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon : ({ tintColor }) => (
        <Icon name="ios-home" size={24}/>
      )
    }
  },

  test: {
    screen:Main,
    navigationOptions:{
      tabBarLabel:'Substitutions',
      tabBarIcon : ({ tintColor }) => (
        <Icon name="ios-settings" size={24}/>
      )
    }
  }
})





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
