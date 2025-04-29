import mongoose from 'mongoose'

const Jobseeker_educationSchema= new mongoose.schema({

    edu_ID: {type:Number, required:true},
    Jobseeker_id: {type:Number, required:true},
    Qualification: {type:String, required:true},
    University_college: {type:string, required:true},
    Passing_year: {type:Number, required:true},
    Percentage_CGPA: {type:Number, required:true},
});

export const Jobseeker_education= mongoose.model("user", Jobseeker_educationSchema);