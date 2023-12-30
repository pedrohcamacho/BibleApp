import React from 'react';
import {Routes} from './src/routes';
import {Loading} from './src/components/Loading';
import { useFonts, Lato_700Bold, Lato_900Black, Lato_400Regular, Lato_400Regular_Italic } from '@expo-google-fonts/lato';
export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Lato_700Bold, Lato_900Black, Lato_400Regular,Lato_400Regular_Italic
  });

  if (!fontsLoaded && !fontError) {
    return <Loading/>;
  }

  return (
    <Routes/>
  );
}