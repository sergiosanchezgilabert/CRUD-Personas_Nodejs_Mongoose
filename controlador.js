
const { response } = require('express')
const Persona = require('./model/Persona')

let todos

var guardar = async function guardar(pers) {
    if (pers.nombre || pers.apellidos)
        return await pers.save()
    else return 'No se puede guardar esta Persona'
}

var buscarTodos = async function buscarTodos() {
    const personas = await Persona.find()
    todos = personas

    if (todos.length === 0) {
        return 'La lista de Personas esta vacia'
    }
    return todos
}

var eliminar = async function eliminar(persona, req) {
    try {
        const result = await Persona.deleteOne({ "_id": req.params['id'] })
        if (result.deletedCount == 1) {
            return 'Persona con ID: ' + req.params['id'] + ' ELIMINADA'
        } else {
            return 'No encontrado persona con ID:' + req.params['id']
        }
    } catch (excepcion) {
        return 'No encontrado persona con ID: ' + req.params['id']
    }
}

var getPersona = async function getPersona(persona, req) {

    try {
        const result = await Persona.findById({ "_id": req.params['id'] })
        if (result) {
            return result
        } else {
            return 'No encontrado persona con ID: ' + req.params['id']
        }
    } catch (excepcion) {
        return 'No encontrado persona con ID: ' + req.params['id']
    }
}

var editar = async function edit(persona, req) {
    try {
        const result = await Persona.findByIdAndUpdate(req.params['id'], persona, { new: true })
        if (result) {
            return 'Persona con ID: ' + req.params['id'] + ' EDITADA'
        } else {
            return 'No encontrado persona con ID: ' + req.params['id']
        }
    } catch (excepcion) {
        return 'No encontrado persona con ID: ' + req.params['id']
    }
}
module.exports = { guardar, buscarTodos, getPersona, editar, eliminar, todos }