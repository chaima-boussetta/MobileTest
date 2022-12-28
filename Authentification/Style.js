import { StyleSheet, Dimensions } from "react-native";

const {height,width} = Dimensions.get('window')

const Style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#181b2c',
      justifyContent:"flex-end"
    },
    welcome:{
        flex:1,
        justifyContent:"flex-end",
        backgroundColor:'#181b2c'
    },
    press:{
        alignItems: 'center',
        justifyContent: 'center',
       // paddingVertical: 12,
        //paddingHorizontal: 32,
        borderRadius: 20,
        //elevation: 3,
        margin:20,
        height:40,
        backgroundColor: '#d137ed',
    },
    pressText:{
        color:'white',
        fontSize:20,
        fontWeight:"bold"
    },
    button:{
       // backgroundColor:'#ff5a1a',
        /*height:80,
        width:80,
        justifyContent:'center',
        borderRadius:50,
       // marginHorizontal:20,
        marginVertical:100,
        marginLeft:280,
        //marginBottom:30*/
    },
    buttonText :{
        fontSize:20,
        color:'white',
        fontWeight:"bold",
        
    },
    bottomContainer :{
        //height : height /3,
    },
    textInput :{
        fontSize:20,
        color:'white',
        height:50,
        borderWidth:1,
        marginHorizontal:20,
        marginVertical:10,
        borderColor:'white',
        borderRadius:25,
        paddingLeft:10
    },
    formButton :{
        backgroundColor:'#ff5a1a',
        height:55,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:35,
        marginHorizontal:20,
        marginVertical:10,
        marginTop:15,
       // marginBottom:30,
        borderWidth:1,
        shadowColor:'#000',
        shadowOffset :{
            width:0,
            height:4,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
    },
    formInputContainer : {
        marginBottom: 70,
    },
    closeButtonContainer:{
        height:40,
        width:40,
        justifyContent:'center',
        alignSelf:'center',
        shadowColor:'black',
        shadowOffset :{
            width:0,
            height:5,
        },
        shadowOpacity:0.34,
        shadowRadius:6.27,
        elevation:1,
        backgroundColor:'white',
        alignItems:'center',
        borderRadius:20
    }
  });
  export default Style;