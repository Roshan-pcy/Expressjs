var express=require('express');
var app=express();
var port=3000;
const mangoose=require('mongoose');
mangoose.connect('mongodb+srv://p3@cluster1.q86ki.mongodb.net/notedb').then(function(){
    app.get('/profile',function(req,res){
        console.log(req);
        res.send('Hello profile')
        
    });
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