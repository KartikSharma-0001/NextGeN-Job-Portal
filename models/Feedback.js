import mongoose from 'mongoose'

const FeedbackSchema=new mongoose.Schema(
    {
     feedback_Id: {type:number},
     jobseekerId: {type: number,required:true},
     feedback: {type:string, required:true},
     feedback_date: {type: date, default:date.now},
    }
);

export const feedback= mongoose.model("user", FeedbackSchema);
