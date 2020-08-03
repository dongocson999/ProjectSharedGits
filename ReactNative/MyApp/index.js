/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AuthProvider from './Auth/AuthPovider.js'

const index = ()=>{
    return(
        <AuthProvider>
            <App />
        </AuthProvider>
    )
}

AppRegistry.registerComponent(appName, () => index);
