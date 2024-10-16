var express=require('express');
 
require('dotenv').config();
var app=express();
var port=3000;
const mangoose=require('mongoose');
const note=require('./model/note')
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
 
const env=process.env.MONGO_URL;
mangoose.connect(env).then(function()
{

  // normal get route
    app.get('/profile',function(req,res){
       // console.log(req);
       //console.log(typeof note);
        res.send('Hello profile')
        
    });
const route=require('./note.js');
app.use('/',route)

  

})
// app.use(function(req,res,next){
//     console.log('middle ware running')

//     next();
// })

app.listen(port,function(){
    console.log('server running');
})