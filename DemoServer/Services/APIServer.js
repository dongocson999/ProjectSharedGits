var express = require('express')
var http = require('http')
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken')
var fs = require('fs')

class APIServer{
    constructor(){
        this.app = express()
        this.Server = http.Server(this.app)

        //testing data
        this.Username = 'dongocson'
        this.Password = '123456'

        //config function callback
        this.configAPIServer()
        this.configRouteAPI()
    }

    //config API server functions
    configAPIServer(){
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: false}))
        this.app.use(express.static('./Publics'))
    }

    //isAuthentication function
    isAuthentication(req,res,next){
        var token = req.headers.get('authentication')
        var key = fs.readFileSync(__dirname + '/privateKey.pem')
        var data = jwt.verify(token,key,{algorithm: 'HS256'})
        
    }

    //config route API server function
    configRouteAPI(){
        //Default route
        this.app.get('/',(req,res)=>{
            res.send('Welcome to Web API Server!')
        })

        //Login route 
        this.app.post('/API/Login',(req,res)=>{
            var user = req.body.username
            var pass = req.body.password
            console.log(user + ' - ' + pass)
            if(user == this.Username && pass == this.Password){
                console.log('success')
                var key = fs.readFileSync(__dirname + '/privateKey.pem')
                var token = jwt.sign({username: this.Username,password: this.Password},key,{algorithm: 'HS256'})
                res.send(JSON.stringify({
                    Message: 'Success',
                    Token: token
                }))
            }else{
                console.log('success')
                res.send(JSON.stringify({
                    Message: 'Fail!',
                    Token: null
                }))
            }
        })
    }

    //run function
    run(){
        this.Server.listen(44444,()=>{
            console.log('Server is running on port: 44444')
        })
    } 
}

module.exports = {Server: APIServer}