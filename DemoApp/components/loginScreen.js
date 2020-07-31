import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import {globalStyles} from '../globals/globalStyles.js'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const LoginScreen = ()=>{

    const [username,setUsername] = useState('')
    const [password, userPassword] = useState('')

    return(
        <View style={globalStyles.container}>
            <View style={styles.ViewTitle}>
                <Text style={styles.Title}>Login</Text>
            </View>
            <View style={styles.ViewInput}>
                <TextInput 
                    style={styles.Input}
                    placeholder={"Username"}
                    onChangeText={null}
                    maxLength={20}
                    defaultValue={username}
                />
                <TextInput 
                    style={styles.Input}
                    placeholder={"Password"}
                    onChangeText={null}
                    maxLength={20}
                    defaultValue={password}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.ViewButton}>
                <TouchableOpacity onPress={null} style={styles.Button}>
                    <Text style={styles.ButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ViewFooter}>
                <Text style={styles.FooterText}>copyright@dongocson999.com</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ViewTitle: {
        backgroundColor:'white',
        flex: 3,
        justifyContent:'center',
        alignItems:'center'
    },
    Title: {
        fontSize: 32,
        fontWeight: 'bold',
        color:'brown'
    },
    ViewInput: {
        backgroundColor: 'white',
        flex: 2,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    Input: {
        fontSize:20,
        width: windowWidth*70/100,
        textAlign:'center',
        borderWidth: 1,
        borderRadius: 20
    },
    ViewButton: {
        backgroundColor:'white',
        flex: 2
    },
    Button:{
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'aqua',
        borderColor: 'white'
    },
    ButtonText: {
        fontSize: 26,
        width: windowWidth*30/100,
        textAlign:'center'
    },
    ViewFooter: {
        backgroundColor: 'white',
        flex: 1/2
    },
    FooterText: {
        fontSize: 16
    }
})

export default LoginScreen