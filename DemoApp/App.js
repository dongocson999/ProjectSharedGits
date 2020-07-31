import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import MainRoute from './routes/mainRoute.js'

const App = ()=>{
  return(
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  )
}

export default App