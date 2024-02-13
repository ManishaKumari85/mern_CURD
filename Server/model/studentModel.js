import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({

fullName:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true 
},
phoneNO:{
    type:Number,
    require:true
},
address:{
    type:String,
    require:true
}




},{timestamps:true})

export default  mongoose.model("Student-Data",studentSchema)