const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = mongoose.Schema({


    name:{
        type:String
    },
   branch:{

    type:String
   },
   email:{
  
    type:String,
    unique:true,
    require:true,

    validate(value){

          if(!validator.isEmail(value)){
      
            throw new Error('invalid email');

          }
    }
   },
  date:{

      type:Date,
      default:Date.now

  }
 
})

const Student = new mongoose.model("Student",studentSchema)

module.exports = Student