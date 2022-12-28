import { View ,Dimensions} from "react-native";
import { Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import Svg,{Image} from 'react-native-svg';
import Style from "./Style";
export default function Login(){
    const {height, width} = Dimensions.get('window');
    return (
        <View style={Style.container}>
            <View style={StyleSheet.absoluteFill} >
            <Svg height={height/2} width={width}>
                <Image href={require('../assets/background.png')} 
                width={width} 
                height={height}
                preserveAspectRatio="xMidYMid slice"
                />
            </Svg>
            
            </View>
            <View style={Style.bottomContainer}>
               
            <View style={[Style.formInputContainer,/*{transform:[{translateY:-100}]}*/]}>
                <TextInput 
                placeholder="Full Name" 
                style={Style.textInput}
                placeholderTextColor='#fff'
                />
                <TextInput 
                placeholder="Email" 
                style={Style.textInput}
                placeholderTextColor='#fff'
                />
                <TextInput 
                placeholder="Password" 
                secureTextEntry={true}
                style={Style.textInput}
                placeholderTextColor='#fff'
                />
                <View style={Style.formButton}>
                    <Text style={Style.buttonText} >LOG IN</Text>
                </View>
            </View>
            </View>
        </View>
    );
}
