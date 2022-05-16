import React from 'react'


import {View, TextInput, StyleSheet} from 'react-native'
const CustomInput = ({value,setValue,placeholder, secure})=>{
    return(
        <View style={styles.container}>
            <TextInput value= {value} 
            onChangeText={setValue} 
            placeholder = {placeholder} 
            style={styles.input}
            secureTextEntry= {secure}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#e3e3e3",
        width: "100%",
        borderRadius:5,
        borderWidth:1,
        paddingHorizontal:5,
        borderColor:"transparent",
        marginVertical:15,
        padding:5,
        fontSize:5,

    },
    input:{
        padding:8,

    }
})


export default CustomInput;