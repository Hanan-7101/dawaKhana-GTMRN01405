const mongoose =require('mongoose')
const Schema = mongoose.Schema
const medicineSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    imageUrl:
    {
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    drugStrength:{
        type:String,
         required:true
    },
    drugForm:{
        type:String,
        required:true
    },
    packSize:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
   
},{timestamps:true},{collection:'medicine-data'})
module.exports =mongoose.model('Medicine',medicineSchema)