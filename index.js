
const express = require('express')
const app = express()
const port = 3000

const  persona= require("./Persona");
const pers=new persona.miclase('Juan','Sanchez')

let array=[]

app.get('/', (req, res) => {
    res.send('Bievenido al CRUD de Personas')
})

app.get('/getTodos', (req, res) => {
    let personaAct=pers
    res.send(array)
})

app.use(express.json())

app.post('/add', function (req, res) {
    let datos=req.body
    let personaNueva=new persona.miclase(datos.nombre,datos.apellidos)
    array.push(personaNueva)
    res.send(personaNueva)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
