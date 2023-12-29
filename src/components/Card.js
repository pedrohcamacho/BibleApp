import React from 'react';
import { StyleSheet, Image, View, Text} from 'react-native';
import { colors, fonts } from '../styles';

export function Card({image, title, text}) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <View style={styles.content}>
                 <Text style={styles.title}>{title}</Text>
                 <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    image:{
        height:131,
        width:152,
        borderRadius:7,
        marginLeft:10,
        marginTop:7
    },
    content:{
        height:50,
        width:152,
        backgroundColor:colors.white,
        alignItems:"center",
    },
    title:{
        fontFamily:fonts.title,
        fontSize:14,
        color:colors.title, 
    },
    text:{
        marginTop:5,
        fontFamily:fonts.text,
        fontSize:12,
        color:colors.title,
    }
})
