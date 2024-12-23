import mongoose, { Schema } from "mongoose";


//define schema
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        requride : true
    },
    email:{
        type : String,
        requride : true
    },
    location:{
        type : String,
        requride : true
    }
    
})

export default mongoose.model("user", userSchema);