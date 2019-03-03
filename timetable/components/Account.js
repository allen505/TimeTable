import React, { Component } from 'react'
import{
    View,
    Text,
    Button,
    AsyncStorage
} from 'react-native'

import styles from '../style'

class Substitution extends Component{
    
    constructor(props){
        super(props);
    }

    logout = () => {
        console.log("logout is pressed")
        // AsyncStorage.removeItem('userData')
        // console.log(AsyncStorage.getItem('userData'));
        // this.props.navigation.navigate('bottomTab');
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

export default Substitution