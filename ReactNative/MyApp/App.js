import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { AuthContext } from './Auth/AuthPovider.js'

import LoginStack from './stacks/loginStack.js'
import HomeStack from './stacks/homeStack.js'

const App =  () => {

  const {state,auth} = React.useContext(AuthContext) //function callback from AuthProvider.js

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