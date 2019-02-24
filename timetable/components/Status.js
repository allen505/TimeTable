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
        this.state={bgcolor:'',
        text:'',
        ccolor:'green',
        rcolor:'RED'}
    }
    
    onconfirm=() =>{
       this.setState({bgcolor:"green",text:'Confirmed!',scolor:"white"});
    }
    
    onreject=()=>{
        this.setState({bgcolor:"red",text:"Rejected",scolor:"white"})
    }

    selectoption=()=>{
        const {button}=styles;
        return(
        <View style ={button}>
            <TouchableOpacity onPress={this.onconfirm}>
            <Text style={{fontSize:18, padding: 10, color: 'green'}}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onreject}>
            <Text style={{fontSize:18, padding: 10, color: 'red'}}>Reject</Text>
            </TouchableOpacity>
        </View>
        );
    }

    displaystatus =()=>{
        const {button}= styles;
        if(this.state.text==''){
           return( 
                <View>
                    {this.selectoption()}
                </View>
            );
        }
        else if(this.state.text=='Confirmed!'){
            return(
                <View style={button}>
                    <View style={{backgroundColor:this.state.bgcolor,padding:10,borderRadius:10}}>
                        <Text style={{fontWeight:'bold',fontSize:20,color:this.state.scolor}}>{this.state.text}</Text>
                    </View>
                </View>
            );
        }
        else if(this.state.text=='Rejected'){
            return(
                <View style={button}>
                    <View style={{backgroundColor:this.state.bgcolor,padding:10,borderRadius:10}}>
                        <Text style={{fontWeight:'bold',fontSize:20,color:this.state.scolor}}>{this.state.text}</Text>
                    </View> 
                </View>
            );
        }
    }

    displayNotification =() => {
    
        var notification = [];
        let jsonmap = ['1','2','3'];
        jsonmap.map((data, index) => {
        
        const {container,display}= styles
            notification.push(
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
                    <Text style = {{padding:10}}>Has requested you to substitute (Class name) during (Period number) session on (Date). </Text>
                        {this.displaystatus()}
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