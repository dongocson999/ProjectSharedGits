import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../globals/globalStyles.js'


const HomeScreen = ({navigation})=>{
        
    return(
        <View style={globalStyles.container}>
            <Text>Welcome to homescreen!</Text>
            <Button 
                title="Insert Token"
                onPress={()=>{  }}
            />
            <Button 
                title="Clear Token"
                onPress={()=>{  }}
            />
        </View>
    )
}

export default HomeScreen