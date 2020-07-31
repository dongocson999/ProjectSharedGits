import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from '../components/loginScreen.js'

const Stack = createStackNavigator()

const LoginStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default LoginStack