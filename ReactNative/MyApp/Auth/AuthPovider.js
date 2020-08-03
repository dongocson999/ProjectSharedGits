import React from 'react'

export const AuthContext = React.createContext()
const AuthProvider = ({children})=>{

    const [state,dispatch] = React.useReducer(authReducer,{isSignIn: false, userToken: null})

    const [Token, setToken] = React.useState('Do Ngoc Son')

    //Function khai bao cac truong hop tuong ung voi gia tri tra ve
    function authReducer(state,action){
        switch(action.type){
            case 'LOGIN':
                //action for 'LOGIN'
                //Return JSON Object state for 'LOGIN'
                return {
                    isSignIn: true,
                    userToken: action.token 
                }
            case 'LOGOUT':
                //action for 'LOGOUT'
                //Return JSON Object state fro 'LOGOUT'
                return {
                    isSignIn: false, 
                    userToken: null
                }
            default:
                return state
        }
    }

    const authFunction = React.useMemo(
        ()=>({
            signIn: async data => {
                //send data to server to authen and get token
                fetch('http://192.168.1.5:44444/API/Login',{
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        username: data.username,
                        password: data.password
                    })
                })
                .then((response)=>response.json())
                .then((responseJson)=>{
                    alert(responseJson.Message)
                    if(responseJson.Message == 'Success') dispatch({type: 'LOGIN', token: responseJson.Token})
                })
                .catch((err)=>{
                    alert(err)
                })
                
            },
            signOut: ()=> dispatch({type:'LOGOUT'}),
            signUp: async data => {
                //send data to server to Resgister and get token
                dispatch({type: 'LOGIN', token: 'enter token here'})
            }
        }),
        []
    )

    const store = {
        state: state,
        auth: authFunction
    }

    return(
        <AuthContext.Provider value={store}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider