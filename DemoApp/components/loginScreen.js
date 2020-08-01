import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, AsyncStorage} from 'react-native'
import {globalStyles} from '../globals/globalStyles.js'
import { LoginFunc } from '../functions/loginFunction.js'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const LoginScreen = ({navigation})=>{

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    function pressHandler(){
        LoginFunc(username,password,navigation)
    }

    return(
        <View style={globalStyles.container}>
            <View style={styles.ViewTitle}>
                <Text style={styles.Title}>Login</Text>
            </View>
            <View style={styles.ViewInput}>
                <TextInput 
                    style={styles.Input}
                    placeholder={"Username"}
                    onChangeText={(text)=>{setUsername(text)}}
                    maxLength={20}
                    defaultValue={username}
                    autoCapitalize={'none'}
                />
                <TextInput 
                    style={styles.Input}
                    placeholder={"Password"}
                    onChangeText={(text)=>{setPassword(text)}}
                    maxLength={20}
                    defaultValue={password}
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                />
            </View>
            <View style={styles.ViewButton}>
                <TouchableOpacity onPress={()=>{ pressHandler() }} style={styles.Button}>
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
        height: 50, //height for iPhone
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