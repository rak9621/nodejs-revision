const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://atul:atul@revisenoderak.zo7jp.mongodb.net/user?retryWrites=true&w=majority",{  useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify:false,useCreateIndex:true}).then(() => {
    
    console.log("database is now connected")

}).catch(() => {

    console.log("databasse is not connected")
})