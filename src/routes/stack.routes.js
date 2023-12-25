import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Home } from '../pages/Home';


const stackRoutes = createStackNavigator();
const Routes = () => (
<stackRoutes.Navigator
 screenOptions={{
  headerShown: false
}}
>  
    <stackRoutes.Screen
    name="Home"
    component={Home}
    gestureEnabled={false}
    />

   

</stackRoutes.Navigator>

)

export default Routes;