import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import StackRoutes from './stack.routes';

export function Routes () {
    
    return (
    <NavigationContainer>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"/>
                <StackRoutes/>
    </NavigationContainer>
    );
}
