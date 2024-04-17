import { View, Text, StyleSheet, ScrollView,} from "react-native";

const Project6 = () => {
    const Square = ({text, bgColor}) => (
        <View style = {{...myStyles.box, backgroundColor: bgColor}}>
            <Text style = {myStyles.text}>
                {text}
            </Text>
        </View>
    );
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
      <ScrollView style = {myStyles.container}>
        {data.map((item, index) => (
            <Square key={item} text={`Square ${index + 1}`} bgColor="#7ce0f9"/>
        ))}
      </ScrollView>
    );
  }
export default Project6;

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        margin: 30,
    },
    box: {
        borderWidth:2,
        height: 100,
        width: 100,
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    text : {
        fontSize: 15,
        fontWeight: "bold"
    }
})