import React from 'react';
import {Routes} from './src/routes';
import {Loading} from './src/components/Loading';
import { useFonts, Lato_700Bold, Lato_900Black, Lato_400Regular } from '@expo-google-fonts/lato';
export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Lato_700Bold, Lato_900Black, Lato_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return <Loading/>;
  }

  return (
    <Routes/>
  );
}