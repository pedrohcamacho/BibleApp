import { View, Text, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {colors, fonts} from '../styles';
import {SafeAreaView} from 'react-native-safe-area-context';
// import data from '../../Data';
import {Verse} from '../components/Verse';
import axios from 'axios';
import {Loading} from '../components/Loading';
import { ModalView } from '../components/ModalView';

export function Devotional() {

const [data, setData] = useState([]);
const [book, setBook] = useState({ "abbrev": {"pt":"jo","en":"jo"},});
const [books, setBooks] = useState([]);
const [chapters, setChapters] = useState([]);
const [chapter, setChapter] = useState("1");
const [versions, setVersions] = useState("nvi");
const [version, setVersion] = useState("nvi");
const [modalBook, setModalBook] = useState(false);
const [modalChapter, setModalChapter] = useState(false);
const [modalVersion, setModalVersion] = useState(false);

const optionsVerses = {
  method: 'GET',
  url: `https://www.abibliadigital.com.br/api/verses/${version}/${book.abbrev.pt}/${chapter}`,
  headers: process.env.TOKEN
};

const optionsBooks = {
  method: 'GET',
  url: `https://www.abibliadigital.com.br/api/books`,
  headers: process.env.TOKEN
};


const optionsVersions = {
  method: 'GET',
  url: `https://www.abibliadigital.com.br/api/versions`,
  headers: process.env.TOKEN
};

async function getResponse(options) {
  try {
    const response = await axios.request(options);
    setData(response.data);
  } catch (error) {
    console.error(error);
  }
}

function handleBookSelected(item){
setBook(item);
setModalBook(false);
}

async function getAllBooks() {
  setModalBook(true)
  try {
    const response = await axios.request(optionsBooks);
    setBooks(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getAllVersions() {
  setModalVersion(true)
  try {
    const response = await axios.request(optionsVersions);
    setBooks(response.data);
  } catch (error) {
    console.error(error);
  }
}

  useEffect(()=>{
    getResponse(optionsVerses)
  },[book,version,chapter])

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
              <TouchableOpacity style={[styles.buttonStyle, styles.chapter]} onPress={()=> getAllBooks()}>
                    <Text style={styles.textStyle}>{book.name || "João"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle, styles.verse]}>
                    <Text style={styles.textStyle}>{chapter.number || "1"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle, styles.version]} onPress={()=> getAllVersions()}>
                    <Text style={styles.textStyle}>{version.version || "NVI"}</Text>
                </TouchableOpacity>
            </View>
        </View>  
        <View style={styles.verses}>
          <FlatList
              contentContainerStyle={{marginLeft:5}}
              data={data.verses}
              renderItem={({item}) => <Verse verse={`${item.number} ${item.text}`}/>}
              keyExtractor={(item) => item.number}
              ItemSeparatorComponent={()=> <View style={{height:5}}></View>}
              ListFooterComponent={<View />}
              ListFooterComponentStyle={{marginBottom:150}}/>
        </View>  
        <ModalView visible={modalBook} closeModal={()=> setModalBook(false)} title="Livros">
           <FlatList
              contentContainerStyle={{marginLeft:5}}
              data={books}
              renderItem={({item}) => 
              <TouchableOpacity onPress={()=> handleBookSelected(item)} style={{paddingBottom:5,paddingLeft:5}}>
                <Text style={{fontFamily:fonts.text, fontSize:14, color:colors.title}}>{item.name}</Text>
              </TouchableOpacity>}
              keyExtractor={(item) => item.abbrev.pt}
              ItemSeparatorComponent={()=> <View style={{height:5}}></View>}
              ListFooterComponent={<View />}
              ListFooterComponentStyle={{marginBottom:40}}/>
        </ModalView>

     
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



