var express = require('express')
var http = require('http')
var bodyParser = require('body-parser')
var fs = require('fs')
var jwt = require('jsonwebtoken')

class APIServer {
    constructor(){
        this.app = express()
        this.Server = http.Server(this.app)

        //config callback functions
        this.configAPI()
        this.configRoute()
    }

    //config server api function
    configAPI(){
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:false}))
    }

    //function isAuthentication
    isAuthentication(req,res,next){
        if(req.header('Authorization') && req.header('Authorization') != ''){
            var token = req.header('Authorization')
            console.log(token)
            var key = fs.readFileSync(__dirname + '/privateKey.pem')
            var data = jwt.verify(token,key,{algorithm:'HS256'})
            if(data.username == 'dongocson' && data.password == '123456'){
                var newToken = jwt.sign({username: 'dongocson', password: '123456'},key,{algorithm:'HS256'})
                res.send(JSON.stringify({Message: 'Success',Token: newToken}))
            }else{
                res.send(JSON.stringify({Message: 'Fail',Token: null}))
            }
        }else{
            res.send(JSON.stringify({Message: 'Fail',Token: null}))
        }
    }

    //config route api functions
    configRoute(){
        //default route
        this.app.get('/',(req,res)=>{
            res.send('Welcome to API Server!')
        })

        //login route
        this.app.post('/API/Login',this.isAuthentication,(req,res)=>{
            var user = req.body.username
            var pass = req.body.password
            console.log(user + ' : ' + pass)
            if(user == 'dongocson' && pass == '123456'){
                var key = fs.readFileSync(__dirname + '/privateKey.pem')
                var token = jwt.sign({username: user, password: pass},key,{algorithm: 'HS256'})
                res.send(JSON.stringify({Message: 'Success',Token:token}))
            }else{
                res.send(JSON.stringify({Message: 'Fail', Token: null}))
            }
        })
    }

    //run api server function
    run(){
        this.Server.listen(44444,()=>{
            console.log('Server is running on port: 44444')
        })
    }
}

module.exports = {API: APIServer}