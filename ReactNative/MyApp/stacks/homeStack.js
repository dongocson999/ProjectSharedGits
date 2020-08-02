import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../components/homeScreen.js'
import DetailScreen from '../components/detailScreen.js'

const Stack = createStackNavigator()

const HomeStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack