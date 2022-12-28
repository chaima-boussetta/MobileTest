import Style from "./Style";
import { View, Dimensions, Text, StyleSheet, Pressable } from "react-native";
import  Svg  ,{ Image } from "react-native-svg";
import { Button } from "react-native";

export default function Welcome (){
    const {height, width} = Dimensions.get("window");
    return(
        <View style={[StyleSheet.absoluteFill,Style.welcome]} >
            <Svg height={height} width={width}>
                <Image href={require('../assets/background.png')} 
                width={width} 
                height={height}
                preserveAspectRatio="xMidYMid slice"
                />
            </Svg>
                {/*<View style={Style.button}>
                    <Text style={Style.buttonText}>Start</Text>
    </View>*/}
                {/*<Button
                title="START"
                color="#d137ed"
                style={Style.start}
/>*/}
            <Pressable style={Style.press} >
                 <Text style={Style.pressText}>START</Text>
            </Pressable>
        </View>
    );
}