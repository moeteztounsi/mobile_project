import React from 'react'
import {ScrollView, Text, View, StyleSheet, TextInput} from 'react-native'
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

const HomeScreen = ()=>{

    const func = ()=>{
        console.log('hellllllllllllllo')
    }
    return(
        <ScrollView>
            <View style = {styles.container}>
                <View style ={styles.view1}>
                    <MaterialCommunityIcons name= 'text' size={30} style={styles.icon1}/>
                    <View style={styles.view2}> 
                        <MaterialCommunityIcons name= 'bell-outline' size={30} style={styles.icon2}/>
                        <AntDesign name='user' size={30} style={styles.icon2}/>
                    </View>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text}>{'Welcome to our task manager'}</Text>
                    <View style={styles.view4}>
                        <MaterialCommunityIcons name= 'magnify' size={30} style={styles.icon1}/>
                        <TextInput style={{width:"100%", borderColor: '#e1e8ff', padding:5}}/>
                    </View>
                </View>
            </View>
            <View style={styles.view5}>
                <Text style={{fontSize:24}}>Tasks</Text>
                <MaterialCommunityIcons onPress={func} name= 'plus' size={35} style={[styles.icon1,{backgroundColor:'#e1e8ff', borderRadius:20,marginHorizontal:5}]}/>
            </View>
            <View style = {{backgroundColor: "#e1e8ff"}}>
               
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container:{
        //
    },
    view1:{
        padding:16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    view2:{
        flexDirection:'row',
        
    },  
    view3:{
        padding: 16
        
    },
    view4:{
        paddingHorizontal:16,
        paddingVertical:8,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:20,
        marginVertical:20,
        alignItems:'center',
        backgroundColor: '#e1e8ff'
        
    },
    view5:{
        padding: 20,
        flexDirection:'row',
        backgroundColor: '#e1e8ff',
        justifyContent:'flex-end',
        alignItems:'center'
    },    
    view6:{
        
    },    
    icon1:{
        color:'black'
    },
    icon2:{
        color:'black'
    },
    text:{
        color:"black",
        fontSize: 30
    }

})


export default HomeScreen;