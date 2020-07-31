import React from 'react'
import {View, Text} from 'react-native'
import {globalStyles} from '../globals/globalStyles.js'

const HomeScreen = ()=>{
    return(
        <View style={globalStyles.container}>
            <Text>Welcome to homeScreen!</Text>
        </View>
    )
}

export default HomeScreen