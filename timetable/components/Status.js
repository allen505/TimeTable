import React, { Component } from 'react'
import{
    ScrollView,
    Text,
    ButtonGroup,
    View,
    Button
} from 'react-native'
import {Card} from 'react-native-elements'
import styles from '../style'


class Substitution extends Component{
    static navigationOptions = {
        title: 'Pick a class',
   
    }
    
    constructor(props){
        super(props);
    }
    
    displayNotification =() => {
    var notification = [];
    
    const {container,button}= styles

    for(let i = 0; i < 5 ; i++){
        notification.push(
            <View style ={container}>
            <Card>
                <Text> Teacher name</Text>
                <Text> Has requested you to substitute (Class name) during (Period number) on (Date). </Text>
                <View style={button}>
                <Button title='confirm' type='solid' color='green'/>
                <Button title='reject' type='outline' color='red'/>
                </View>
            </Card>
            </View>
        )
    }
    return notification;
    }

    render(){

        const {container} = styles
        return(
             <ScrollView style={container}>
            {this.displayNotification()}
            </ScrollView>
        );
    }
}

export default Substitution