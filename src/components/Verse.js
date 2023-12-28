import { View, Text } from 'react-native';
import React from 'react';
import {colors, fonts} from '../styles';

export function Verse({verse}) {
  return (
    <View>
      <Text style={styles.verse}>{verse}</Text>
    </View>
  )
}

const styles = {
verse:{
    fontFamily:fonts.text,
    color:colors.title
}
}