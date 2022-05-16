import React,{useState} from 'react'
import imageRemovebgPreview from '../assets/Images/image-removebg-preview.png'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, useWindowDimensions, Image} from 'react-native'
import CustomInput from '../Components/inputs';
import CustomButton from '../Components/custumBottun';
import axios from 'axios';

const RegisterScreen = ()=>{
    
    const {height} = useWindowDimensions();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUsername] = useState("");

    const navigation = useNavigation();

    const onSignUp = async(e)=>{
       
        e.preventDefault();
        try{
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const {data}  = await axios.post("http://localhost:7500/api/users/register",
            {userName,email,password}, config);

            console.log(data);
            localStorage.setItem("ueseInfo", JSON.stringify(data));
            

        }catch(err){
           console.log(err)
        }
        
        navigation.navigate('Home')
    }

   

    const onHaveAccount = ()=>{
        navigation.navigate('Login')
    }

    return(
        <ScrollView showsVerticalScrollIndicator = {false}>
            <View style = {styles.root}>
                <Image source={imageRemovebgPreview} style={[styles.logo,{height:height * 0.3}]}  resizeMode = "contain"/>
                <CustomInput placeholder = "Username" value={userName} setValue={(newtext)=>setUsername(newtext)}/>
                <CustomInput placeholder = "Email" value={email} setValue={(newtext)=>setEmail(newtext)}/>
                <CustomInput placeholder = "Password" value = {password} setValue={(newtext)=>setPassword(newtext)} secure = {true}/>
                <CustomInput placeholder = "Confirm Password" value = {confirmPassword} setValue={(newtext)=>setConfirmPassword(newtext)} secure = {true}/>
                <CustomButton text = "Sign Up" onPress={onSignUp}/>
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