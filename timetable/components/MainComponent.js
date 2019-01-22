import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import{
    View,
    Text,
    Button
} from 'react-native'
import { createStackNavigator } from 'react-navigation';

class Main extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
             <View style={styles.container}>
            <Text>This is Main Component</Text>
            
            </View>
        );
    }
}

export default Main



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });