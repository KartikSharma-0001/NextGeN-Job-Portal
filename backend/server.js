import express from 'express'
import path from 'path'
import mongoose from 'mongoose'




const app= express();
app.use(express.urlencoded({extended:true}));


mongoose.connect(process.env.MONGO_URL , {
    dbName:"NextGeN_Job_Portal"
}).then(()=>console.log("MongoDb connected...!")).catch((err)=> console.log(err))



app.get('/' ,(req,res)=>{
    res.render('login.ejs')
})



const port= process.env.PORT;
app.listen(port,()=> console.log(`Server is running on ${port}`))
