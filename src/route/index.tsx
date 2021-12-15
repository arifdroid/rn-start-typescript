import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
// import { View, Text } from 'react-native'
import Example from '../demo/Example/Example';
import { PanGesture } from '../demo/PanGesture/PanGesture';
import type { Routes } from './Routes'

const Stack = createNativeStackNavigator<Routes>();

const MainRoute = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Examples"
            component={Example}
            options={{
                title:'App Example'
            }}
        ></Stack.Screen>
        <Stack.Screen
            name="PanGesture"
            component={PanGesture}
        ></Stack.Screen>
    </Stack.Navigator>
)

export default MainRoute;
