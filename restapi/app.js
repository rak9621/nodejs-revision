const express = require('express')
const User = require('./db/model/userModel')
require('./db/conn/conn')


const port = process.env.port ||3000
const app = express()




app.use(express.json())




// ->create
app.post('/userapi',async (req,res)=> {

    try {
    
        const result = new User(req.body)   
        const createUser = await  result.save()
        res.status(401).send(createUser)
    
    } catch (e) {
    
        res.status(201).send(e)
    
    }
    
    })
    
    // -> read
   app.get('/userapi' ,async (req,res) => {
    
    
        try {
            
            const userdata = await User.find()
              res.send(userdata)
    
        } catch (e){
            
            res.status(201).send(e)
        }
    })
        
    
    // read by id
    
app.get('/userapi/:id' ,async (req,res) => {
    
    
        try {
    
            const _id = req.params.id
            
            const userdata = await User.findById({_id})
              res.send(userdata)
    
        } catch (e){
            res.status(201).send(e)
        }
    })
    
    // update
    
  app.patch('/userapi/:id',async(req,res) =>{
    
    
    try {
        
      const _id = req.params.id
    
      const userUpdate = await User.findByIdAndUpdate({_id}, req.body,{
    
           new:true
    
      })
      res.send(userUpdate)
    
    } catch (e) {
        
    res.status(401).send(e)
    
    }
        
    
    })
    
    
    
    //delete user
    
   app.delete('/userapi/:id', async (req,res) => {
           
        try {
            
            const _id = req.params.id
            const deleteuser = await User.findByIdAndDelete({_id})
            res.send(deleteuser)
        } catch (e) {
            res.status(401).send(e);    
        }
    })
    










app.listen(port ,(req,res) => {

    console.log("user server started")
    
})









