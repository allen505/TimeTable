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
      backgroundColor:'red',
      padding:0,
      borderRadius: 15,
      margin: 10,
      height: 35,
      fontSize: 14,
    },

    componentView:{
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundColor: 'white',
      margin: 2,
      padding:2,
      borderRadius: 15,
      
    },

    dateSelector:{
      alignItems: 'center',
    },
    
    datestyle:{
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row'
    }

  });