import React from 'react';
import { StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native';
import { colors } from '../styles';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

export function Loading() {
    return (
        <ActivityIndicator style={styles.container} size="large" color={colors.secondaryHeading}/>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center',
        justifyContent:'center',
        fontSize: height * 0.045
    }
})
