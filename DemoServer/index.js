var API = require('./Services/APIServer.js')

class IndexApp{
    constructor(){
        this.APIServer = new API.Server()
    }

    //run app function
    runApp(){
        this.APIServer.run()
    }
}

var indexApp = new IndexApp()
indexApp.runApp()