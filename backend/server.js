import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
// import {Jobseeker_reg} from '../models/Jobseeker_reg.js'



const app= express();
app.use(express.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://kartiksharma4449:B2MFB9fG14xaQwYw@cluster1.yinf0vn.mongodb.net/", {
    dbName:"NextGeN_Job_Portal"
}).then(()=>console.log("MongoDb connected...!")).catch((err)=> console.log(err))

// app.get('/',(req,res)=>{

//     const dir=path.resolve();

//     res.sendFile(path.join(backend,'login.html'));
    
// });

app.get('/' ,(req,res)=>{
    res.render('login.ejs')
})

// app.post('/logged-in'), (req,res)=>{
//     res.json(req.body)
// }


const port= 2000;
app.listen(port,()=> console.log(`Server is running on ${port}`))
