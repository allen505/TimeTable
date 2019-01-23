import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      flexWrap: "nowrap",
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      marginTop: 30,
      marginBottom: 25,
    },

    ttView: {
      flex: 3,
      flexDirection: "column",
      flexWrap: "nowrap",
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
    },

    dateSelector:{
      flex: 2,
      flexDirection: "column",
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

      margin: 5,
      height: 10,
    }
  });