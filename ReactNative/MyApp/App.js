import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import { AuthContext } from './Auth/AuthPovider.js'

import LoginStack from './stacks/loginStack.js'
import HomeStack from './stacks/homeStack.js'

const App =  () => {

  const [TokenSt, setToken] = useState(null)
  const {state} = React.useContext(AuthContext)

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
    //alert()
  })

  return(
    <NavigationContainer>
        {state.userToken == null ? (
          < LoginStack />
          ) : (
            <HomeStack />
          )}
    </NavigationContainer>
    
  )
}

export default App