import React,{useState} from 'react'
import imageRemovebgPreview from '../assets/Images/image-removebg-preview.png'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, useWindowDimensions, Image} from 'react-native'
import CustomInput from '../Components/inputs';
import CustomButton from '../Components/custumBottun';
import { useForm } from 'react-hook-form';

const RegisterScreen = ()=>{
    
    const {height} = useWindowDimensions();

    const {control, handleSubmit, watch} = useForm();
    const navigation = useNavigation();

    const pwd = watch('password');

    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const onSignUp = async(data)=>{
       console.log(data);

       navigation.navigate('Home')
    }

   

    const onHaveAccount = ()=>{
        navigation.navigate('Login')
    }

    return(
        <ScrollView showsVerticalScrollIndicator = {false}>
            <View style = {styles.root}>
                <Image source={imageRemovebgPreview} style={[styles.logo,{height:height * 0.3}]}  resizeMode = "contain"/>
                <CustomInput name = "username" placeholder = "Username" control={control} rules={{required:'Username is required',minLength: {value:3, message:'Username should be at least 3 charachters'},maxLength: {value:20, message:'Username should not exceed 20 charachters'} }}/>
                <CustomInput name="email" placeholder = "Email" control={control} rules={{required:'Email is required', pattern: {value :EMAIL_REGEX, message:"Please enter a valid email"}}}/>
                <CustomInput name="password" placeholder = "Password" control={control} secure = {true} rules={{required:'Password is required', minLength: {value:8, message:'Password should be at least 8 charachters'}}}/>
                <CustomInput name="confirmPassword" placeholder = "Confirm Password" control={control}  secure = {true} rules={{required:'Confirm Password is required', validate: value => value == pwd || "Password do not match"}}/>
                <CustomButton text = "Sign Up" onPress={handleSubmit(onSignUp)}/>
                <CustomButton text="Have an account? Sign In" onPress={onHaveAccount} type="TERTTARY"/>
            </View>
        </ScrollView>
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

export default RegisterScreen;