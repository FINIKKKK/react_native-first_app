import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "./Home";
import {NavigationContainer} from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} options={{title: ''}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}