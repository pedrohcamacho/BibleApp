import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import {colors, fonts} from '../styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Devotional from '../assets/Devotional.jpg';
import Suppler from '../assets/Suppler.jpg';
import Youngs from '../assets/Youngs.jpg';
import JesusBirth from '../assets/JesusBirth.jpg';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import {Card} from '../components/Card';

export function Home() {
    const [randomVerse,setRandomVerse] = useState([])

    const optionsRandomVerse = {
        method: 'GET',
        url: `https://www.abibliadigital.com.br/api/verses/nvi/random`,
        headers: process.env.TOKEN
      };

      async function getRandomVerse() {
        try {
          const response = await axios.request(optionsRandomVerse);
          setRandomVerse(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(()=>{
        getRandomVerse()
      },[])

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
        {randomVerse.length == 0 ? null :
            <View style={styles.verseOfTheDay}>
                <Text style={styles.devotionalText}>Versículo do dia</Text>
                <Text style={styles.verse}>{randomVerse.text}</Text>
                <Text style={styles.ref}>{randomVerse.book.name } {randomVerse.chapter }:{randomVerse.number }</Text>
            </View>
        }
        <View style={styles.devotional}> 
            <Text style={styles.devotionalText}>Devocional diário</Text>
            <View style={{marginTop:"3%"}}>
                <Image source={Devotional} style={styles.devotionalImage}/> 
                <LinearGradient colors={["rgba(0,0,0,0.45)", 'transparent']} style={styles.gradient}/>
            </View>
        </View>

        <View style={styles.warnings}>
        <Text style={styles.devotionalText}>Próximas programações</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card image={Suppler} text="Culto de ceia"/>
            <Card image={JesusBirth} text="Culto de natal"/>
            <Card image={Youngs} text="Culto de jovens"/>
        </ScrollView>
        </View>
    </View>
  )
}

const styles = {
    container:{
        flex:1,
        backgroundColor:colors.white
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
    verseOfTheDay:{
        marginLeft:"8%",
        marginTop:"5%",
        marginRight:"5%"
    },
    verse:{
        marginTop:5,
        fontFamily:fonts.text,
        color:colors.black,
        fontSize:13
    },
    ref:{
        fontFamily:fonts.title,
        color:colors.black,
        fontSize:13
    },
    devotional:{
        marginLeft:"8%",
        marginTop:"5%",
        marginRight:"5%"
    },
    devotionalText:{
        fontFamily: fonts.header,
        color:colors.title,
        fontSize:16,
    },
    devotionalImage:{
        width:"100%",
        height:220,
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