import React, { Component } from 'react'
import{
    ScrollView,
    Text,
    ButtonGroup,
    View,
    Image,
    TouchableOpacity,
    Button
} from 'react-native'
import {Card,Header} from 'react-native-elements';
import styles from '../style';


class Substitution extends Component{
    static navigationOptions = {
        title: 'Pick a class',
   
    }
    
    constructor(props){
        super(props);
    }
    
    displayNotification =() => {
    var notification = [];
    let jsonmap = ['1', '2', '3','4','5'];
    jsonmap.map((data, index) => {
    
    const {container,button,display}= styles
        notification.push(
            <View style ={container}>
            <Card>
                <View style={display}>
                    <View>
                        <Text style={{fontWeight: 'bold',fontSize:20}}> Teacher name</Text>
                        <Text style={{fontWeight:'500',fontSize:18}}>Department</Text>
                        <Text style={{fontWeight:'500',fontSize:15}}>Designation</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/icon.png')} style={{height:60}} resizeMode="contain"/>
                    </View>
                </View>
                <Text> Has requested you to substitute (Class name) during (Period number) session on (Date). </Text>
                <View style={button}>
                    <TouchableOpacity onPress={()=> console.log("Confirm pressed")}>
                    <Text style={{fontSize:18}}>Confirm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> console.log("Reject pressed")}>
                    <Text style={{fontSize:18}}>Reject</Text>
                    </TouchableOpacity>
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
            <View style={container}>
            <View>
            <Header
                     barStyle = 'light-content'
                     backgroundColor="#147efb"
                    //leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Permission Status', style: { color: '#fff' ,fontSize: 23}  }}
                // rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>
             <ScrollView style={container}>
           
            {this.displayNotification()}
            </ScrollView>
            </View>
        );
    }
}

export default Substitution