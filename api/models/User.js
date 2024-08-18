const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{ 
        type:String,
         require:true,
         unique:true
    },
    password:{
        type:String,
        require:true,
    },
    profilePic:{
        type:String,
        default:"https://piyushheightsrwa.com/wp-content/uploads/2021/06/default-image.png"
    },
},{timestamps:true});
module.exports=mongoose.model("User",UserSchema);