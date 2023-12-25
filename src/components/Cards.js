import React from 'react';
import { StyleSheet, Image, View, Text} from 'react-native';
import { colors } from '../styles';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

export function Cards({image, title}) {
    return (
        <View>
            <Image source={image}/>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})
