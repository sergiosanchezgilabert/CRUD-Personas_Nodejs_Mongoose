require('dotenv').config({path:'./enviroments.env'});


const express = require('express')
const controlador = require('./controlador')
const { response } = require('express')

const app = express()
const port = process.env['PORT']
const host= process.env['HOST']
app.use(express.json())

const bbdd = require('./bbdd')

/* === Cargamos la entidad Persona === */
const Persona = require('./model/Persona')

app.get('/', (req, res) => {
    res.send('Bienvenido')
})

app.get('/getTodos', function (req, res) {
    controlador.buscarTodos(req, res)
})

app.post('/add', function (req, res) {
    controlador.guardar(req, res)
})

app.get('/get/:id', function (req, res) {
    controlador.getPersona(req,res)
})

app.delete('/delete/:id', function (req, res) {
    controlador.eliminar(req,res)
})

app.put('/edit/:id', function (req, res) {
    controlador.editar(req, res)
})

app.listen(port, () => {
    console.log(`App CRUD de Persona at http://${host}:${port}`)
})
