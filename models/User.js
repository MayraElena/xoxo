// se manda a llamar a mongoos primeramente
const mongoose = require('mongoose');
// Vamos a defenir el esquema
const userSchema= new mongoose.Schema({
    nombre: {
        type: String,
        required:true
    },
    apellido_paterno: {
        type: String,
        required:true
    },
    sexo:{
        type: String,
        enum: ['F','M','SN'],
        required:true
    },
    correo : {
        type: String,
        required:true
    },
    telefono : {
        type: String,
        required:true
    }
});

const User = mongoose.model('user', userSchema);
module.exports=User;