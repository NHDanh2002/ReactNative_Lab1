import { View, Text, StyleSheet, TouchableOpacity,} from "react-native";

const Project5 =() => {
    const Square = ({text, bgColor}) => (
        <View style = {{...myStyles.box, backgroundColor: bgColor}}>
            <Text style = {myStyles.text}>
                {text}
            </Text>
        </View>
    )
    return (
      <View style = {myStyles.container}>
        <Square text="Square1" bgColor="#7ce0f9"/>
        <Square text="Square2" bgColor="#4dc2c2"/>
        <Square text="Square3" bgColor="#ff637c"/>
      </View>
    );
  }
export default Project5;

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    box: {
        borderWidth:2,
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    text : {
        fontSize: 15,
        fontWeight: "bold"
    }
})