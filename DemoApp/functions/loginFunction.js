var Login = (username,password,navigation,AsyncStorage)=>{
    fetch("http://192.168.1.5:44444/API/Login",{
            method:'POST',
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((response)=>response.json())
        .then((data)=>{
            alert('Login ' + data.Message)
            if(data.Message == 'Success')
            {
                AsyncStorage.setItem('CurrentToken',data.Token)
                //alert(data.Message)
                navigation.navigate('HomeStack')
            }
        })
        .catch((err)=>{
            alert('Connected Error!' + err)
        })
}

module.exports = {
    LoginFunc : Login
}