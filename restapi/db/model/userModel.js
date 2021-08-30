const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = mongoose.Schema({

    name:{
        type:String,

        require:true
    
    },
    email:{

        type:String,
        unique:true,
        require:true,
       validate(value){
            if(!validator.isEmail(value)){
                throw new ERROR("invalid email")
            }
       }
    },
phone:{
        
       type:Number,
       require:true

    }
})


const User = new mongoose.model("User",userSchema);

module.exports = User