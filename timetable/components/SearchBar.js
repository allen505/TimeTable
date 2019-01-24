import React, { Component } from 'react'
import { View, Text, TextInput, Keyboard } from 'react-native'

import styles from '../style'

class SearchBar extends Component{
   render(){
    const { searchBar, container, componentView } = styles
       return(
           <View style={container}>
               <View style={componentView}>
                <TextInput 
                    style = {searchBar}
                    placeholder = "Search" 
                    onSubmitEditing={Keyboard.dismiss}   
                    onBlur={Keyboard.dismiss}                    
                /></View>
           </View>
       )
   }
}

export default SearchBar