import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,} from "react-native";

const Project4 =() => {
    const [pressCount, setPressCount] = useState(0);
    const onPress = () => {
        setPressCount(pressCount + 1)
    }
    return (
      <View style = {myStyles.container}>
        <Text style = {myStyles.text}>
            You've pressed the button: {pressCount} time(s)
        </Text>
        <TouchableOpacity 
            style = {{...myStyles.button}}
            onPress={onPress}>
            <Text style = {myStyles.text}>
                Press me
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
export default Project4;

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        marginTop: 30
    },
    button: {
        margin:10,
        borderWidth: 2,
        padding:20,
        borderRadius:30
    },
    text : {
        fontSize: 20,
        fontWeight: "bold"
    }
})