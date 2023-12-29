import React from 'react'
import { View, Modal, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'
import { colors, fonts } from '../styles';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

export function ModalView({visible,children,closeModal, title}) {
    return (
        <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        visible={visible}>
        <TouchableWithoutFeedback  onPress={closeModal}>
            <View style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                        {children}
                </View>
            </View>
      </TouchableWithoutFeedback>
        </Modal>
    )
}


const styles = StyleSheet.create({
    background:{
        flex:1,
        position:'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom:'0',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: '1000'
      },
    container:{
        width: 300, 
        height: 400, 
        borderRadius:7,
        backgroundColor: colors.white
    },
    title:{
        fontFamily:fonts.title,
        color:colors.black,
        opacity:0.5,
        fontSize:16,
        paddingBottom:"5%",
        alignSelf:'center'
    }
})