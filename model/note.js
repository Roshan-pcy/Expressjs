const { default: mongoose } = require('mongoose');
const mangoose=require('mongoose');
const schema=mangoose.Schema({
    id:{type:String,unique:true,
        required:true
    },
    userid:{type:String, 
        required:true},
    title:{type:String, 
        required:true
    },
    content:{type:String},
    dateadded:{
        type:Date,
        default:Date.now
    }
})

 module.exports=mongoose.model('Note',schema)