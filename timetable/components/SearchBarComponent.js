import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'

import styles from '../style'

class SearchBarComponent extends Component{
   render(){
        const { container, componentView, searchBar } = styles
        return(
           <View>
               
               <SearchBar
                    lightTheme
                    round
                    platform="ios"
                    searchIcon={{ size: 24 }}
                    // cancelButtonTitle="Cancel"
                    placeholder='Search'/>                  
                
           </View> 
       )
   }
}

export default SearchBarComponent