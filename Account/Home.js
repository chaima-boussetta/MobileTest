import { View,StyleSheet,Text } from "react-native";
import { Pressable } from "react-native";


export default function Home(){
    return(
        <View style={[styles.container,StyleSheet.absoluteFill]}>
            <View style={styles.top}>
                <Text style={styles.topText}>Welcome Back Customer</Text>
            </View>
            <Text style={styles.choose}>Choose Your Service !</Text>
            <View style={styles.buttons}>
            <Pressable style={styles.press} >
                 <Text style={styles.service}>Emission d'un transfert</Text>
            </Pressable>
            <Pressable style={styles.press} >
                 <Text style={styles.service}>Réstitution d'un transfert</Text>
            </Pressable>
            <Pressable style={styles.press} >
                 <Text style={styles.service}>Historique</Text>
            </Pressable>
            <Pressable style={styles.press} >
                 <Text style={styles.service} >Ajouter Un beneficiaire</Text>
            </Pressable>
            </View>
        </View>
    );

}
const styles=StyleSheet.create({
    container:{
        paddingTop:50,
        backgroundColor:'#181b2c'
    },
    top:{
        height:50,
        backgroundColor:'#d137ed',
        paddingLeft:10,
        paddingTop:10

    },
    topText:{
        color:'white',
        fontSize:20,
    },
    choose:{
        color:'#d137ed',
        fontSize:35,
        margin:20,
        marginTop:100
    },
    buttons:{
        marginTop:70
    },
    press:{
        backgroundColor:'white',
        margin:10,
        height:40,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:20,
    },
    service:{
        alignSelf:'center',
        fontSize:22
    }
})