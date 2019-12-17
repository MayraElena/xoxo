const express = require('express');
const cors = require('cors');
const app = express();
const { User, Vestidos} = require('./models/index');
const PORT =process.env.PORT || 3000;
app.use(cors());
app.use(express.urlencoded({extended:true})); // agrega al obtejo rej el body :) 
app.use(express.json())



app.listen(PORT,()=>{
    console.log('server on port 3000');
});

// USUARIOS
app.post('/User',(req,res)=>{
    const newUsuario= User(req.body); 
    newUsuario.save((err,user)=>{
        err ? res.status(400).send(err) : res.status(201).send(user);
    });
});

app.get('/all/User',(req,res)=>{
    User.find().exec()
    .then((result)=>{
        res.send(result);
    })
    .catch ((err)=>{
        res.status(400).send(err);

    });
});

// VESTIDOS
app.post('/Vestidos',(req,res)=>{
    const newVestido= Vestidos(req.body); 
    newVestido.save((err,vestido)=>{
        err ? res.status(400).send(err) : res.status(201).send(vestido);
    });
});
app.get('/all/Vestidos',(req,res)=>{
    Vestidos.find().exec()
    .then((result)=>{
        res.send(result);
    })
    .catch ((err)=>{
        res.status(400).send(err);

    });
});
