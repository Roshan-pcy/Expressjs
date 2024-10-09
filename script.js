var express=require('express');
var app=express();
var port=3000;
app.use(function(req,res,next){
    console.log('middle ware running')
    next();
})
app.get('/profile',function(req,res){
    res.send('Hello profile')
});

app.get('/profile/:username',function(req,res){
    res.send('Hello user ${req.username}')
});
app.listen(port)