
const { response } = require('express')
const Persona = require('./model/Persona')

let todos

var guardar = async function guardar(req, res) {
    let personaNueva = req.body
    const pers = new Persona({ nombre: personaNueva.nombre, apellidos: personaNueva.apellidos });
    if (pers.nombre && pers.apellidos) {
        await pers.save()
        res.status(200).send('Persona insertada. ')
    }

    else res.status(404).send('No se puede guardar esta Persona')
}

var buscarTodos = async function buscarTodos(req, res) {
    try {
        const personas = await Persona.find()
        todos = personas

        if (todos.length === 0) {
            res.status(400).send('La lista esta vacia')
        }
        res.status(200).send(todos)
    } catch (excepcion) {
        res.status(500).send('Internal Error Server')

    }

}

var eliminar = async function eliminar(req, res) {
    try {
        let persona = req.body
        const result = await Persona.deleteOne({ "_id": req.params['id'] })
        if (result.deletedCount == 1) {
            res.status(200).send('Persona con ID: ' + req.params['id'] + ' ELIMINADA')
        } else {
            res.status(400).send('No encontrado persona con ID: ' + req.params['id'])
        }
    } catch (excepcion) {
        res.status(500).send('Internal Error Server')
    }
}

var getPersona = async function getPersona(req, res) {

    try {
        const result = await Persona.findById({ "_id": req.params['id'] })
        if (result) {
            res.status(200).send(result)
        } else {
            res.status(400).send('No encontrado persona con ID: ' + req.params['id'])
        }
    } catch (excepcion) {
        res.status(500).send('Internal Error Server')
    }
}

var editar = async function edit(req, res) {
    try {
        let persona = req.body
        const result = await Persona.findByIdAndUpdate(req.params['id'], persona, { new: true })
        if (result) {
            res.status(200).send('Persona con ID: ' + req.params['id'] + ' EDITADA')
        } else {
            res.status(400).send('No encontrado persona con ID: ' + req.params['id'])
        }
    } catch (excepcion) {
        res.status(500).send('Internal Error Server')
    }
}
module.exports = { guardar, buscarTodos, getPersona, editar, eliminar, todos }