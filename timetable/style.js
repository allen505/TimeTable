import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      marginTop: 30,
      marginBottom: 25,

    },

    ttView: {
      flex: 5,
      flexDirection: "column",
      flexWrap: "nowrap",
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',      
    },

    searchBar:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor:'#d5d7dd',

      padding:10,
      borderRadius: 15,
      height: 35,
      fontSize: 14,
    },

    componentView:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',

      margin: 2,
      padding:2,
      borderRadius: 15,
      
    },

    dateSelector:{
      alignItems: 'center',
    },

    nextbutton:{
      flex:1,
      justifyContent: 'flex-end',
      flexDirection: 'row'
    }
  });