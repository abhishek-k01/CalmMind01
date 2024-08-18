const mongoose=require("mongoose");
const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    photo: {
        type: String,
        required: false,
        default:"https://i.pinimg.com/564x/68/a9/d7/68a9d7ff43241336410315b1517fdcb6.jpg"
      },
    desc:{ 
        type:String,
         require:true,
    },
    username:{
        type:String,
        require:true,
    },
    categories:{
        type:Array,
        require:false
    },
},{timestamps:true});
module.exports=mongoose.model("Post",PostSchema);