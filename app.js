//Carregando Módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require("body-parser")
    const app = express()
    const admin = require("./routers/admin")
    //const mongoose = require("mongoose")

//Configuraçãoes
    //Body Parser(express)
        app.use(express.urlencoded({extended: true}))
        app.use(express.json())
    //Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars');
    //Mongoose
        //
    //
//Rotas
    app.use('/admin', admin)

//Outros
const PORT = 8081
app.listen(PORT,() => {
    console.log("servidor rodando! ")
})