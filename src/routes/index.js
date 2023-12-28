import React from 'react';
import { Image } from 'react-native'
import { Home } from '../pages/Home';
import { Devotional } from '../pages/Devotional';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {colors} from '../styles';
import {FontAwesome5} from '@expo/vector-icons';
// const stackRoutes = createStackNavigator();

const {Navigator, Screen} = createBottomTabNavigator();

export function Routes (){
return (
  <NavigationContainer>
    <Navigator screenOptions={{
      tabBarActiveTintColor:colors.logo
    }}>
      <Screen name="Home"
      component={Home}
      options={{
        tabBarIcon: ({size, color}) => <FontAwesome5 name="home" size={size} color={color}/>,
        headerShown:false,
        
      }}/>

      <Screen name="Devotional"
      component={Devotional}
      options={{
        tabBarIcon: ({size, color}) => <FontAwesome5 name="bible" size={size} color={color}/>,
        headerShown:false,
        title:"Devocional"
      }}/>

    </Navigator>
  </NavigationContainer>
)
}