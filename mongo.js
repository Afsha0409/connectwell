const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/project")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const login = mongoose.model("login",newSchema)

module.exports=login