import React from 'react'
import {View, Text, StyleSheet,TextInput, TouchableOpacity, Dimensions} from 'react-native'
import {globalStyles} from '../globals/globalStyles.js'
import { AuthContext } from '../Auth/AuthPovider.js'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const LoginScreen = ()=>{

    const [Username, setUsername] = React.useState('')
    const [Password, setPassword] = React.useState('')

    const { auth } = React.useContext(AuthContext)

    function pressHandler(){
        const data = {
            username: Username,
            password: Password
        }
        auth.signIn(data)
    }

    return(
        <View style={globalStyles.container}>
            <View style={styles.ViewTitle}>
                <Text style={styles.Title}>Login</Text>
            </View>
            <View style={styles.ViewInput}>
                <TextInput 
                    style={styles.Input}
                    placeholder={'Username'}
                    onChangeText={(text)=>{setUsername(text)}}
                    maxLength={20}
                />
                <TextInput 
                    style={styles.Input}
                    placeholder={'Username'}
                    onChangeText={(text)=>{setPassword(text)}}
                    maxLength={20}
                />
            </View>
            <View style={styles.ViewButton}>
                <TouchableOpacity style={styles.Button} onPress={()=>{pressHandler()}}>
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
        fontSize: 40,
        fontWeight:'bold',
        color:'brown'
    },
    ViewInput: {
        backgroundColor: 'white',
        flex: 2,
        width:windowWidth,
        justifyContent: 'space-evenly',
        alignItems:'center'
    },
    Input: {
        width: windowWidth * 70/100,
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        textAlign:'center',
        fontSize: 26
    },
    ViewButton: {
        backgroundColor:'white',
        flex: 2,
    },
    Button: {
        backgroundColor: 'aqua',
        width: 150,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    ButtonText: {
        fontSize:26,
        textAlign:'center'
    },
    ViewFooter: {
        backgroundColor: 'white',
        flex: 1/2
    }
})

export default LoginScreen