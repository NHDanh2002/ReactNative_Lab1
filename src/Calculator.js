import { useState } from "react";
import {Vibration, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import Entypo from "@expo/vector-icons/Entypo"

const Calculator = () => {
    const [darkMode, setDarkMode] = useState(false);
    const ColorResults = (darkMode)? '#282f3b' : '#f5f5f5';
    const ColorHistoryText = (darkMode) ? '#B5B7BB' : '#7c7c7c';
    const ColorThemeButton = (darkMode) ? '#7b8084' : '#e5e5e5';
    const ColorButton = (darkMode) ? '#3f4d5b' : '#e5e5e5';
    const ColorTextButton = (darkMode) ? '#b5b7bb' : '#7c7c7c';

    const [currentNumber, setCurrentNumber] = useState("");
    const [lastNumber, setLastNumber] = useState("");

    const buttons = ['C', 'DEL', '/', 7 , 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
    
    function calculator(){
        let lastArr = currentNumber[currentNumber.length-1];
        if(lastArr === '/' || lastArr === '*' || lastArr === '+' || lastArr === '-' || lastArr === '.'){
            setCurrentNumber(currentNumber)
            return
        }else {
            let result = eval(currentNumber).toString();
            setCurrentNumber(result)
            return
        }
    }
    function handleInput (buttonPressed){
        if(buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/'){
            Vibration.vibrate(35);
            setCurrentNumber(currentNumber + buttonPressed)
            return
        }
        else if(buttonPressed === 1 || buttonPressed === 2 ||buttonPressed === 3 ||buttonPressed === 4 ||buttonPressed === 5 ||buttonPressed === 6 ||buttonPressed === 7 ||buttonPressed === 8 ||buttonPressed === 9 ||buttonPressed === 0 ||buttonPressed === '.'){
            Vibration.vibrate(35);
        }
        switch(buttonPressed){
            case 'DEL':
                Vibration.vibrate(35);
                setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
                return
            case 'C':
                Vibration.vibrate(35);
                setLastNumber('')
                setCurrentNumber('')
                return
            case '=':
                Vibration.vibrate(35);
                setLastNumber(currentNumber + '=')
                calculator()
                return
        }
        setCurrentNumber(currentNumber + buttonPressed)
    }
    return (
        <View>
            <View style = {{...myStyles.results, backgroundColor:`${ColorResults}`}}>
                <TouchableOpacity style = {{...myStyles.themeButtons, backgroundColor: `${ColorThemeButton}`}}>
                    <Entypo name={darkMode ? 'light-up' : 'moon'} size={24} color={darkMode ? 'white' : 'black'} onPress={() => darkMode? setDarkMode(false) : setDarkMode(true)}/>
                </TouchableOpacity>
                <Text style={{...myStyles.historyText, color:`${ColorHistoryText}`}}>{lastNumber}</Text>
                <Text style={{...myStyles.resultText}}>{currentNumber}</Text>
            </View>
            <View style = {{...myStyles.buttons}}>
                {buttons.map((button) =>
                    button === '=' || button === '/' || button === '*' || button === '-' || button === '+' ?
                    <TouchableOpacity key={button} onPress={()=> handleInput(button)} style={{...myStyles.button, backgroundColor: '#00b9d6', borderColor: `${ColorButton}`}}>
                        <Text style={{...myStyles.textButton, color: `${ColorTextButton}`}}>{button}</Text>
                    </TouchableOpacity> 
                    :
                    button === '.' || button === 'DEL' ?
                    <TouchableOpacity key={button} onPress={()=> handleInput(button)} style={{...myStyles.button, backgroundColor: button === '.' ?
                    darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '$ededed', minWidth: '37%'}}>
                        <Text style={{...myStyles.textButton, color: `${ColorTextButton}`}}>{button}</Text>
                    </TouchableOpacity>
                    :
                    button === 'C' || button === 0 ?
                    <TouchableOpacity key={button} onPress={()=> handleInput(button)} style={{...myStyles.button, backgroundColor: typeof(button) === 'number' ?
                    darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '36%'}}>
                        <Text style={{...myStyles.textButton, color: `${ColorTextButton}`}}>{button}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity key={button} onPress={()=> handleInput(button)} style={{...myStyles.button, backgroundColor: typeof(button) === 'number' ?
                    darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed'}}>
                        <Text style={{...myStyles.textButton, color: `${ColorTextButton}`}}>{button}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
export default Calculator;
const myStyles = StyleSheet.create({
    results: {
        //backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
        maxWidth: '100%',
        minHeight: '35%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    resultText: {
        maxHeight: 45,
        color: '#00b9d6',
        margin: 15,
        fontSize: 35,
    },
    historyText: {
        //color: darkMode ? '#B5B7BB' : ' #7c7c7c',
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-end',
    },
    themeButtons: {
        alignSelf: 'flex-start',
        bottom: '5%',
        margin: 15,
        //backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    buttons: {
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        //borderColor: darkMode ? '#3f4d5b' : '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '24%',
        minHeight: '54%',
        flex: 2,
    },
    textButton: {
        //color: darkMode ? '#b5b7bb' : '7c7c7c',
        fontSize: 28,
    }
})