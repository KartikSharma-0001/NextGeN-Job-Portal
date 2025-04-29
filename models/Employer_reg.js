import mongoose from 'mongoose'

const Employer_regSchema= new mongoose.schema(
    {
     EmployerId: {type:number , required:true}, 
     Company_Name: { type:string , required:true},
     Contact_Person: { type:string , required:true},
     city:{ type:string , required:true},
     adress: { type:string },
     Email: { type:string , required:true},
     Mobile: { type:number , required:true},
     Job_Location: { type:string , required:true},
     status: { type:string },
     Username: { type:string , required:true},
     password: { type:string , required:true},
     question:{ type:string , required:true},
     answer: { type:string , required:true},
    createdAT: {type:date ,default: date.now}
    }
);

export const Employer_reg = mongoose.model("User" , Employer_regSchema);