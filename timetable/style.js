import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#fff',
      //alignItems: 'stretch',
      //justifyContent: 'center',
      marginTop: 0,
      marginBottom: 15,

    },

    ttView: {
      flex: 5,
      flexDirection: "column",
      flexWrap: "nowrap",
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center', 
      margin: 10,
      padding: 10,
      borderRadius: 10
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
      marginBottom: 20,
      height: 35,
      fontSize: 14,
    },

    componentView:{
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundColor: 'white',
      margin: 10,
      padding:2,
      borderRadius: 15,
      
    },

    dateSelector:{
      alignItems: 'center',
      margin: 10
    },
    
    datestyle:{
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
      margin : 10
    },
    timetext:{
      flex:1,
      margin: 5,
      
    },
    display:{
      flex:1,
      flexDirection:'row',
      padding:0
    },

    button:{
      flex:1,
      flexDirection: 'row',
      alignItems:'center',
      padding: 5,
      justifyContent : 'center',
      margin:5,

    }

  }



  );