const express =require('express')
const mongoose = require('mongoose')
const medicineRouter =require('./Routes/medicine')
const userRouter=require('./Routes/user')
const cors =require('cors')
const app =express()

require('dotenv').config()
app.use(cors())

app.use(express.json());

app.use((req,res,next)=>{

    console.log(req.path,req.method)
    next();
})

//for medicine
app.use("/api/medicines",medicineRouter)

//for user
app.use("/api/user",userRouter)

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Listining On port",process.env.PORT)
        
    });
})

.catch((error)=>{
    console.log(error);
})
