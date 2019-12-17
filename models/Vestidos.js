
const mongoose = require('mongoose');
const vestidoSchema= new mongoose.Schema({
    marca: {
        type: String,
        required:true
    },
    precio: {
        type: String,
        required:true
    },
    opcion:{
        type: String,
        enum: ['Venta','Renta'],
        required:true
    },
    descipcion : {
        type: String,
        required:true
    },
    talla:{
        type: String,
        enum: ['XCH','CH','M','G','XG'],
        required:true
    },
    foto:{
        type: String,
        required:true
    },
    usuario:{
        type: [mongoose.Schema.Types.ObjectId],
        ref:'User'
    }
});

const Vestidos = mongoose.model('vestidos', vestidoSchema);
module.exports=Vestidos;