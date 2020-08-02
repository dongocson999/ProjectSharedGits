import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import LoginStack from './stacks/loginStack.js'
import HomeStack from './stacks/homeStack.js'

const App = ({navigation})=>{

  const [Token, setToken] = useState(null)

  useEffect(()=>{
    const asyncFunction = async ()=>{
      var userToken = null;

      try{
        userToken = await AsyncStorage.getItem('CurrentToken')
      }catch(err){
        alert(err)
      }

      setToken(userToken)
    }

    asyncFunction()
  })

  return(
      <NavigationContainer>
        {Token == null ? (
            <LoginStack />
          ) : (
            <HomeStack />
        )}
      </NavigationContainer>
  )
}

export default App