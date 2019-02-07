import styles from '../style'
import React, { Component } from 'react'
import {Card} from 'react-native-elements'
import{
    View,
    ScrollView,
    Text,
    Button,
    Alert,
    Image
} from 'react-native'
 
class Cards extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {container,display}= styles
        return(
            <ScrollView style={container}>
           <Card title='Teacher name'>
               <Image
               resizeMode="cover"
               source={require('../assets/icon.png')}
               />
               <Text>
                   Teacher available for number of periods displayed
               </Text>
               </Card>
               </ScrollView>
        )
    }
}
export default Cards