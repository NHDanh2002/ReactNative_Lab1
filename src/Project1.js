import { View, Text, StyleSheet } from "react-native";

const Project1 =() => {
    return (
      <View style = {myStyles.container}>
        <Text>Hello World!!</Text>
      </View>
    );
  }
export default Project1;

const myStyles = StyleSheet.create({
    container:{
        height: 100,
        width: 100,
        backgroundColor: "aqua",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    }
})