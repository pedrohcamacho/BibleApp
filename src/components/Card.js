import React from 'react';
import { StyleSheet, Image, View, Text} from 'react-native';
import { colors, fonts } from '../styles';

export function Card({image, text}) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <Text style={styles.text}>{text}</Text>
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
    text:{
        fontFamily:fonts.title,
        fontSize:14,
        color:colors.title,
    }
})
