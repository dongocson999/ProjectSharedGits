import {StyleSheet,Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export const globalStyles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
        alignItems:'center'
    }
})