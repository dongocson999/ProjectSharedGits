import React from 'react'
import {View, Text, Button} from 'react-native'
import {globalStyles} from '../globals/globalStyles.js'

const LoginScreen = ()=>{

    const pressHandler = ()=>{

    }

    return(
        <View style={globalStyles.container}>
            <Text>Welcome to LoginScreen!</Text>
            <Button 
                title="Click"
                onPress={()=>{pressHandler()}}
            />
        </View>
    )
}

export default LoginScreen