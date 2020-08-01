var Login = (username,password,navigation)=>{
    fetch("http://10.10.10.10:44444/API/Login",{
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
            navigation.navigate('HomeStack')
            if(data.Message == 'Success')
            {
                AsyncStorage.setItem('CurrentToken',data.Token)
                //alert(data.Message)
                navigation.navigate('HomeStack')
            }
        })
        .catch((err)=>{
            alert('Connected Error!')
        })
}

module.exports = {
    LoginFunc : Login
}