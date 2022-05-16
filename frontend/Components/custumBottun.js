import React from "react";

import  {View, Text, StyleSheet, Pressable} from 'react-native'

const CustomButton = ({onPress, text,type= "PRIMARY"})=>{
    return(
        <Pressable onPress={onPress} style = {[styles.container, styles[`container_${type}`]]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#e3e3e3',
        width: '80%',
        padding:10,
        borderRadius: 50,
        marginVertical:10
    },

    container_PRIMARY:{
        backgroundColor :"#e3e3e3"
    },

    container_TERTTARY:{
        backgroundColor:"transparent"
    },

    text:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default CustomButton;