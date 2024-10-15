var express=require('express');
 
require('dotenv').config();
var app=express();
var port=3000;
const mangoose=require('mongoose');
const note=require('./model/note')
 
const env=process.env.MONGO_URL;
mangoose.connect(env).then(function(){
    app.get('/profile',function(req,res){
       // console.log(req);
       console.log(typeof note);
        res.send('Hello profile')
        
    });
    app.get('/note/list', async function(req,res){
      try{
        var notes= await note.find();
        res.json(notes);

      }catch(error){
res.status(500).send("Error  retrieving  notes ")
      } });
      app.get('/note/list/:userid', async function(req,res){
        try{
          var notes= await note.find({userid:req.params.userid});
          res.json(notes);
  
        }catch(error){
  res.status(500).send("Error  retrieving  notes ")
        } });

//      app.get('/note/add', async function(req,res){
//         try{
//          var newNote=note({id:"0001",userid:"aneesh@gmail.com",title:'my note',content:'Note content'})
//          await newNote.save();
//          var responce={message:'yes added notes into db'};
//           res.json(responce);
  
//         }catch(error){
//   res.status(500).send("Error  retrieving  notes ")
//         }
       
         
           
//        });
       app.get('/note/add2',async function(req,res){
     try{
        const notAdd=note({id:'00003',userid:'ennnfnfe',title:'title it',content:'conten2'});
        await notAdd.save();
        res.json({message:'added successfully'})
     }catch(error){
res.status(500).send(`Error found: ${error.message}`);
     }


       })

})
// app.use(function(req,res,next){
//     console.log('middle ware running')

//     next();
// })


app.get('/profile/:username',function(req,res){
    res.send(`Hello user ${req.params.username}`)
});
app.listen(port,function(){
    console.log('server running');
})