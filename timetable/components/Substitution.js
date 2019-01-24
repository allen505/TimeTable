import React, { Component } from 'react'
import{
    View,
    Text,
    Button
} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Header} from 'react-native-elements'

import styles from '../style'

class Substitution extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const {container} = styles
        const {nextbutton} = styles
        return(  
            <View style ={container}>

            <Text>This is Substitution Component</Text>


            <View style={nextbutton}>
            
             <Button 
              title='Next'
             onPress={()=> this.props.navigation.navigate('Substitution2') }> 

             </Button>
             </View>
            
            </View>
        );
    }
}

class Substitution2 extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const {container} = styles
        const {nextbutton} = styles
        return(
             <View style={container}>
            <Text>This is Substitution2 Component</Text>
            <View style={nextbutton}>
            <Button 
              title='Next'
            onPress={()=> this.props.navigation.navigate('Substitution3') } >
            </Button>
            </View>
            </View>
        );
    }
}

class Substitution3 extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const {container} = styles
        const {nextbutton} = styles
        return(
             <View style={container}>
            <Text>This is Substitution3 Component</Text>
            </View>
        );
    }
}

export default createStackNavigator({
   home: Substitution,
   Substitution2: Substitution2,
   Substitution3: Substitution3
});



