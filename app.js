//Carregando Módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require("body-parser")
    const app = express()
    const admin = require("./routers/admin")
    const path = require('path')
    const mongoose = require("mongoose")
    const session = require("express-session")
    const flash = require("connect-flash")

//Configuraçãoes
    //Sessão
        app.use(session({
            secret: "cursodenode",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    //Middleware
        app.use((req, res, next) =>{
            res.locals.success_msg = req.flash("success_msg")
            res.locals.error_msg = req.flash("error_msg")
            next()
        })
    //Body Parser(express)
        app.use(express.urlencoded({extended: true}))
        app.use(express.json())
    //Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars');
    //Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost/blogapp").then(()=> {
            console.log("Conectado ao Mongo!")
        }).catch((err) => {
            console.log("Erro ao se conectar: " + err)
        })
    //
    //Public
    app.use(express.static(path.join(__dirname, "public")))

//Rotas
    app.use('/admin', admin)

//Outros
const PORT = 8081
app.listen(PORT,() => {
    console.log("servidor rodando! ")
})