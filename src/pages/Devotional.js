import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import {colors, fonts} from '../styles';
import {SafeAreaView} from 'react-native-safe-area-context';
// import data from '../../Data';
import {Verse} from '../components/Verse';
import axios from 'axios';
import {Loading} from '../components/Loading';

export function Devotional() {
const [data, setData] = useState([]);
const options = {
  method: 'GET',
  url: 'https://www.abibliadigital.com.br/api/verses/nvi/sl/1',
  headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlR1ZSBEZWMgMjkgMjAyMCAxNDoxNDowMiBHTVQrMDAwMC5wZWRyb2hjYW1hY2hvQGhvdG1haWwuY29tIiwiaWF0IjoxNjA5MjUxMjQyfQ.z6EtUFYyIkRu-b79vzquymOKH9vh0jakWfbwPA1kWkU' }
  
};

async function getVerses() {
  try {
    const response = await axios.request(options);
    setData(response.data);
    console.log(data)
  } catch (error) {
    console.error(error);
  }
}

  useEffect(()=>{
    getVerses();
  },[data])

  if (!data)
  return(
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
          <Loading/>
      </View>
    )
  return (
    <View style={styles.container}>
        <SafeAreaView/>
        <View style={styles.header}>
            <View style={styles.buttons}>  
              <TouchableOpacity style={[styles.buttonStyle, styles.chapter]}>
                    <Text style={styles.textStyle}>João</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle, styles.verse]}>
                    <Text style={styles.textStyle}>1-22</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle, styles.version]}>
                    <Text style={styles.textStyle}>KJV</Text>
                </TouchableOpacity>
            </View>
        </View>  
        <View style={styles.verses}>
          <FlatList
              contentContainerStyle={{marginLeft:5}}
              data={data.verses}
              renderItem={({item}) => <Verse verse={item.text}/>}
              keyExtractor={(item) => item.number}
              ItemSeparatorComponent={()=> <View style={{height:5}}></View>}
              ListFooterComponent={<View />}
              ListFooterComponentStyle={{marginBottom:150}}/>
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
     borderBottomStyle:"solid",
     borderColor:colors.secondary,
     borderBottomWidth:1,
     alignItems:"center",
     justifyContent:"center",
     paddingBottom:10,
    },
    buttons:{
      flexDirection:"row",
      alignItems:"center",
    },
    buttonStyle:{
      width:80,
      height:32,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:colors.logo
    },
    chapter:{
      borderBottomLeftRadius:10,
      borderTopLeftRadius:10,
    },
    verse:{
      marginRight:2,
      marginLeft:2
    },
    version:{
      borderBottomRightRadius:10,
      borderTopRightRadius:10,
    },
    textStyle:{
      fontFamily:fonts.header,
      color:colors.white,
      fontSize:14
    },
    verses:{
      marginTop:10,
      alignItems:"center"
    }
}



