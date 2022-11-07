const express = require('express');
const path = require('path')
const methodOverride = require('method-override') // para poder usar o delete  e post no HTML 5 

const listaMercadoRouter = require('./src/routes/listaMercado')
const gastosFixosRouter = require('./src/routes/gastosFixos')
const economiaRouter = require('./src/routes/economia')
const homeRouter = require('./src/routes/home')
const indexRouter = require('./src/routes/index')

require('./config/database')

const app = express();

app.use(express.json())


app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')
app.use(methodOverride('_method', {methods: ['POST', 'GET']}))

app.use('/public', express.static('public')); // usar o css 'style.css'
app.use(express.urlencoded({extended: true})) // processa as requisicoes dos forms

app.use('/', listaMercadoRouter)
app.use('/', gastosFixosRouter)
app.use('/', economiaRouter)
app.use('/', homeRouter)
app.use('/', indexRouter)

app.listen(3000, () => {
    console.log('Servidor funcionando')
})
