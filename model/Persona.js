const mongoose= require('mongoose')

const PersonaSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String
});

const Persona = mongoose.model('Persona', PersonaSchema);

module.exports=Persona