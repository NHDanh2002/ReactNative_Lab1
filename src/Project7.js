import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert,} from "react-native";

const Project7 = ()=> {
    const [name, setName] = useState("")
    const onPress = ()=>{
        Alert.alert(`Hello ${name}`);
        setName("");
    }
    return (
      <View style = {myStyles.container}>
        <Text style = {myStyles.text}>
            What is your name?
        </Text>
        <TextInput
            style = {myStyles.input}
            placeholder="input your name"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            value={name}
            onChangeText = {setName}
        />
        <TouchableOpacity 
            style = {myStyles.button}
            onPress = {onPress}>
            <Text style = {myStyles.text}>Say hello</Text>
        </TouchableOpacity>
      </View>
    );
  }
export default Project7;

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 30,
        padding: 10
    },
    input: {
        padding:10,
        margin:10,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 5,
        fontSize: 18
    },
    button: {
        borderWidth:2,
        borderRadius:30,
        backgroundColor: "#4dc2c2",
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    text : {
        fontSize: 20,
        fontWeight: "bold"
    }
})