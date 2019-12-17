const mongoose = require('mongoose');
const User= require('./User');
const URL ='mongodb+srv://admin:40405035@cluster0-okqoo.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(URL,(err)=>{
    if(!err) console.log('Conexión exitosa');
    else console.log(err);
});
module.exports={
    User
}