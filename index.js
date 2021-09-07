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

app.get('/getTodos', (req, res) => {
    var promesa = controlador.buscarTodos()
    promesa.then((response) => res.send(response))

})

app.post('/add', function (req, res) {
    let personaNueva = req.body
    const silenceNew = new Persona({ nombre: personaNueva.nombre, apellidos: personaNueva.apellidos });
    controlador.guardar(silenceNew).then((resp ) => res.send(resp))
})

app.get('/get/:id', function (req, res) {
    let personaMod = req.body
    controlador.getPersona(personaMod, req).then((r) => res.send(r))
})

app.delete('/delete/:id', function (req, res) {
    let personaMod = req.body
    controlador.eliminar(personaMod, req).then((r) => res.send(r))
})

app.put('/edit/:id', function (req, res) {
    let personaMod = req.body 
    controlador.editar(personaMod, req).then((r) => res.send(r))
})

app.listen(port, () => {
    console.log(`App CRUD de Persona at http://${host}:${port}`)
})
