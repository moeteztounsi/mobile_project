import React, {useState} from 'react'; 
import axios from 'axios';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native'
import imageRemovebgPreview from '../assets/Images/image-removebg-preview.png'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../Components/inputs';
import CustomButton from '../Components/custumBottun';
const LoginScreen = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const onSignIn = async(e)=>{
       
        e.preventDefault();
        
        try{
            const config ={
                headers:{
                    "Content-Type": "application/json"
                }
            }

            const {data}  = await axios.post('http://localhost:7500/api/users/login', {email, password}, config);

            console.log(data);
            localStorage.setItem("ueseInfo", JSON.stringify(data));

        }catch(error){
           console.log(error)
        }

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
            <CustomInput placeholder = "Email" value={email} setValue={setEmail}/>
            <CustomInput placeholder = "Password" value = {password} setValue={setPassword} secure = {true}/>
            <CustomButton text = "Sign In" onPress={onSignIn}/>
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