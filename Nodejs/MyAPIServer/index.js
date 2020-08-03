var Server = require('./API/APIServer.js')

class IndexApp{
    constructor(){
        this.ApiServer = new Server.API()
    }

    //run app function
    runApp(){
        this.ApiServer.run()
    }
}

var indexApp = new IndexApp()
indexApp.runApp()