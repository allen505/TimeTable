import React, { Component } from 'react'
import{
    ScrollView,
    Text,
    ButtonGroup,
    View,
    Button,
} from 'react-native'
import {Card,Header} from 'react-native-elements'
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
    let jsonmap = ['1', '2', '3'];
    jsonmap.map((data, index) => {
    
    const {container,button}= styles
        notification.push(
            <View style ={container}>
            <Card>
                <Text> Teacher name</Text>
                <Text> Has requested you to substitute (Class name) during (Period number) session on (Date). </Text>
                <View style={button}>
                <Button title='Confirm' type='solid' color='green'/>
                <Button title='Reject' type='outline' color='red'/>
                </View>
            </Card>
            </View>
        )
    }
    );
    return notification;
    }

    render(){
        const {container} = styles
        return(
            
             <ScrollView style={container}>
                <Header
                     barStyle = 'light-content'
                     backgroundColor="#147efb"
                    //leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Permission Status', style: { color: '#fff' ,fontSize: 23}  }}
                // rightComponent={{ icon: 'home', color: '#fff' }}
                />
            {this.displayNotification()}
            </ScrollView>
        );
    }
}

export default Substitution