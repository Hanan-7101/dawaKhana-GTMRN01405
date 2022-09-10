const Medicine = require("../models/medicine")
const mongoose =require('mongoose')
// get all students
const getMedicines =async (req,res)=>{
    const medicine=await Medicine.find({}).sort({createdAt:-1});
res.status(200).json(medicine);
}




//get a single Medicine
const getMedicine = async (req,res)=>{
    const {id}= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Medicine"});
    }
    const medicine =await Medicine.findById(id);
    if(!medicine){
        return res.status(404).json({error: 'No Such Meidicine'});
    }
    res.status(200).json(medicine);

}





//create a Medicine
const createMedicine = async (req, res)=>{
    const {title,imageUrl,brand,drugStrength,drugForm,packSize, price}=req.body;
    try{
        const medicine= await Medicine.create({title,imageUrl,brand,drugStrength,drugForm,packSize, price});
        res.status(200).json(medicine);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}




//delete a  Medicine
const deleteMedicine= async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Medicine"});
    }
    const medicine =await Medicine.findOneAndDelete({_id:id});
    if(!medicine){
        return res.status(404).json({error: 'No Such Medicine'});
    }
    res.status(200).json(medicine);
}



//update a studnet
const updateMedicine= async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Medicine "});
    }

    const  medicine =await Medicine.findByIdAndUpdate({_id:id},{
        ...req.body
        })
        if(!medicine){
            return res.status(404).json({error: 'No Such Medicine'})
        }
        res.status(200).json(medicine)

}


module.exports={
    createMedicine,
    getMedicine,
    getMedicines,
    deleteMedicine,
    updateMedicine
}