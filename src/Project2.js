import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const Project2 =() => {
    const onPress = ()=>
    {
        Alert.alert("Hello!!")
    }
    return (
      <View style = {myStyles.container}>
        <TouchableOpacity 
            style = {myStyles.button}
            onPress = {onPress}>
            <Text style = {myStyles.text}>
                Button
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
export default Project2;

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        marginTop: 30
    },
    button: {
        backgroundColor: "aqua",
        borderWidth: 2,
        padding:20,
        borderRadius:30
    },
    text : {
        fontSize: 20
    }
})