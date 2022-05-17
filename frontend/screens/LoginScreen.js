import React, {useState} from 'react'; 
import axios from 'axios';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native'
import imageRemovebgPreview from '../assets/Images/image-removebg-preview.png'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../Components/inputs';
import CustomButton from '../Components/custumBottun';
import {useForm} from 'react-hook-form'
const LoginScreen = ()=>{

    const {control, handleSubmit, formState: {errors}} = useForm();
    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const onSignIn = async(data)=>{

        navigation.navigate('Home')
    }

    const onForgotPassword = ()=>{
        console.log("Forgot password?")
    }

    const onNew = ()=>{
        console.log("Go to register screen")

        navigation.navigate('Register')
    }

    return(
        <View style={styles.root}>
            <Image source={imageRemovebgPreview} style={[styles.logo,{height:height * 0.3}]}  resizeMode = "contain"/>
            <CustomInput name="email" placeholder = "Email" control={control} rules={{required: 'Please enter your email', pattern: {value:EMAIL_REGEX, message:"Please Enter a valid email"}}} />
            <CustomInput name="password" placeholder = "Password" control={control} secure = {true} rules={{required:'Please enter your password'}}/>
            <CustomButton text = "Sign In" onPress={handleSubmit(onSignIn)}/>
            <CustomButton text="Forgot password?" onPress={onForgotPassword} type="TERTTARY"/>
            <CustomButton text="New here? Sign Up" onPress={onNew} type="TERTTARY"/>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:70,
    },
    logo:{
        width:"70%",
        maxWidth:300,
        height:100,
        maxHeight:300,
        paddingTop:100

    }
})

export default LoginScreen;