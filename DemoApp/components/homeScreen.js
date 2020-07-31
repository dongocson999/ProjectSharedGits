import React from 'react'
import {View, Text, Button} from 'react-native'
import {globalStyles} from '../globals/globalStyles.js'

const HomeScreen = ({navigation})=>{

    function pressHandler(){
        navigation.navigate('DetailScreen')
    }

    return(
        <View style={globalStyles.container}>
            <Text>Welcome to homeScreen!</Text>
            <Button 
                title="Go To Detail"
                onPress={()=>{pressHandler()}}
            />
        </View>
    )
}

export default HomeScreen