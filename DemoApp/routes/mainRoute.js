import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import HomeStack from '../stacks/homeStack.js'
import LoginStack from '../stacks/loginStack.js'

const Stack = createStackNavigator()

const MainRoute = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='LoginStack' component={LoginStack} options={{headerShown:false}}/>
            <Stack.Screen name='HomeStack' component={HomeStack} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default MainRoute