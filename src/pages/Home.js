import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {colors, fonts} from '../styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Devotional from '../assets/Devotional.jpg';
import { LinearGradient } from 'expo-linear-gradient';

export function Home() {
  return (
    <View style={styles.container}>
        <SafeAreaView/>
        <View style={styles.header}>
            <View style={styles.welcomeMessage}>
                <Text style={styles.title}>Seja bem vindo</Text>
            </View>
            <TouchableOpacity style={styles.user}>
                <Text style={styles.title}>U</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.devotional}> 
            <Text style={styles.devotionalText}>Devocional diário</Text>
            <View style={{marginTop:"3%"}}>
                <Image source={Devotional} style={styles.devotionalImage}/> 
                <LinearGradient colors={["rgba(0,0,0,0.45)", 'transparent']} style={styles.gradient}/>
            </View>
        </View>

        <View style={styles.warnings}>
        <Text style={styles.devotionalText}>Avisos importantes</Text>
        </View>
    </View>
  )
}

const styles = {
    container:{
        flex:1,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    welcomeMessage:{
        marginLeft:"5%"
    },
    user:{
        marginRight:"5%",
        height:50,
        width:50,
        borderRadius:"50%",
        borderStyle:"solid",
        borderColor:colors.black,
        borderWidth:2, 
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontFamily: fonts.header,
        fontSize:18,
    },
    devotional:{
        marginLeft:"8%",
        marginTop:"8%",
        marginRight:"5%"
    },
    devotionalText:{
        fontFamily: fonts.header,
        color:colors.title,
        fontSize:16,
    },
    devotionalImage:{
        width:"100%",
        height:256,
        borderRadius:10,
    },
    gradient:{
        width:"100%",
        height:256,
        borderRadius:10,
        position:"absolute",
    },
    warnings:{
        marginLeft:"8%",
        marginTop:"8%",
        marginRight:"5%"
    }
}