import mongoose from "mongoose";

const Jobseeker_regSchema = new mongoose.schema({
  Jobseeker_ID: { type: String  },
  Jobseeker_Name: { type: String, required:true },
  Email: { type: String , required:true},
  city: { type: String , required:true},
  address: { type: String },
  mobile: { type: Number },
  qualification: { type: String, required:true },
  gender: { type: String },
  DOB: { type: Number, required:true },
  Age: { type: Number, required:true },
  Resume: { type: String },
  status: { type: String },
  UserName: { type: String, required:true },
  password: { type: String, required:true },
  question: { type: String },
  answer: { type: String },
  createdAT: { type: Date, default: Date.now },
});

export const Jobseeker_reg = mongoose.model("user", Jobseeker_regSchema);