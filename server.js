// console.log('hello');

// import area

const express = require('express');
const { mwfn1 } = require('./middleware/middleware');
const app = express();

require('dotenv').config()

app.post('/students',mwfn1,function(req,res,next){
next()
},
function(req,res){
    let name = req.query.name;
    let surname = req.query.surname;
    let contactno = req.query.contactno;
    console.log(req.query);
res.json({ msg : `hello ${name} ${surname} ${contactno}, how are you ?` })
})


let port = process.env.PORT;
app.listen(port,()=>{
    console.log(`this process is running on port no ${port}`);
})