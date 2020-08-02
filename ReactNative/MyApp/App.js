import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import LoginStack from './stacks/loginStack.js'

const App = ()=>{
  return(
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  )
}

export default App