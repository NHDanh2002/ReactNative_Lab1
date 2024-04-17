import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const Project3 =() => {
    const onPressHello = ()=>
    {
        Alert.alert("Hello!!")
    }
    const onPressGoodbye = ()=>
    {
        Alert.alert("Goodbye!!")
    }
    return (
      <View style = {myStyles.container}>
        <TouchableOpacity 
            style = {{...myStyles.button, backgroundColor: "red"}}
            onPress = {onPressHello}>
            <Text style = {myStyles.text}>
                Hello Button
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style = {{...myStyles.button, backgroundColor: "blue"}}
            onPress = {onPressGoodbye}>
            <Text style = {myStyles.text}>
                Goodbye Button
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
export default Project3;

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