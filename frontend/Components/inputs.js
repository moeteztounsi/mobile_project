import React from 'react'
import {Controller} from 'react-hook-form';
import {View, TextInput, StyleSheet,Text} from 'react-native'
const CustomInput = ({name,control,placeholder, secure, rules = []})=>{
    return(
        <Controller 
        control={control}
        rules={rules}
        name={name}
        render= {({field: {value, onChange, onBlur}, fieldState:{error}})=> (
            <>
                <View style={[styles.container, {borderColor : error ? 'red' : "#e3e3e3" }]}> 
                    <TextInput 
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder = {placeholder}
                    style={styles.input}
                    secureTextEntry= {secure}
                />
                </View>
                {error && <Text style={{color: 'red', alignSelf:'stretch'}}> { error.message || 'Error'}</Text>}
            </>
        )} 
        />
       
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