


const note=require('./model/note')
const express=require('express')
const route=express.Router();

  // get All data 
  route.get('/note/list', async function(req,res){
    try{
      var notes= await note.find();
      res.json(notes);

    }catch(error){
  res.status(500).send("Error  retrieving  notes ")
    } });

     //get Specific users from fb 

     route.post('/note/list', async function(req,res){
      try{
        var notes= await note.find({userid:req.body.userid});
        res.json(notes);

      }catch(error){
res.status(500).send("Error  retrieving  notes ")
      } });


      //Add data into db

//    app.get('/note/add', async function(req,res){
//       try{
//         await note.deleteOne({id:req.body.id})
//        var newNote=note({id:"0001",userid:"aneesh@gmail.com",title:'my note',content:'Note content'})
//        await newNote.save();
//        var responce={message:'yes added notes into db'};
//         res.json(responce);

//       }catch(error){
// res.status(500).send("Error  retrieving  notes ")
//       }      
//      });


//Add post using post route

route.post('/note/add', async function(req,res){
      try{
        await note.deleteOne({id:req.body.id})// if dublicte exits this will delete that post and add new data
       var newNote=note({id:req.body.id,userid: req.body.userid,title: req.body.title,content:req.body.content})
       await newNote.save();
       var responce={message:'yes added notes into db'+`${req.body.id}`};


        res.json(responce);

      }catch(error){
res.status(500).send("Error  retrieving  notes ")
      }      
     });






     route.post('/note/delete' ,async function(req,res){
await note.deleteOne({id: req.body.id});
res.json({message:'deleted id is '+`${req.body.id}`});

})


route.get('/profile/:username',function(req,res){
   res.send(`Hello user ${req.params.username}`)
});





module.exports=route;