import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../globals/globalStyles.js'
import AsyncStorage from '@react-native-community/async-storage'

const HomeScreen = ({navigation})=>{
        
    function pressHandlerInsert(){
        AsyncStorage.setItem('CurrentToken','dongocson')
        alert('yes')
    }

    function pressHandlerClear(){
        AsyncStorage.removeItem('CurrentToken')
        alert('yes')
    }

    return(
        <View style={globalStyles.container}>
            <Text>Welcome to homescreen!</Text>
            <Button 
                title="Insert Token"
                onPress={()=>{ pressHandlerInsert() }}
            />
            <Button 
                title="Clear Token"
                onPress={()=>{ pressHandlerClear() }}
            />
        </View>
    )
}

export default HomeScreen