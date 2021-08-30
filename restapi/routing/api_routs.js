const express = require("express")
const router = new express.Router()

const User = require('../db/model/userModel')


// ->create

router.post('/userapi',async (req,res)=> {

try {

    const result = new User(req.body)   
    const createUser = await  result.save()
    res.status(401).send(createUser)

} catch (e) {

    res.status(201).send(e)

}

})

// -> read
router.get('/userapi' ,async (req,res) => {


    try {
        
        const userdata = await User.find()
          res.send(userdata)

    } catch (e){
        
        res.status(201).send(e)
    }
})
    

// read by id

router.get('/userapi/:id' ,async (req,res) => {


    try {

        const _id = req.params.id
        
        const userdata = await User.findById({_id})
          res.send(userdata)

    } catch (e){
        res.status(201).send(e)
    }
})

// update

router.patch('/userapi/:id',async(req,res) =>{


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

router.delete('/userapi/:id', async (req,res) => {
       
    try {
        
        const _id = req.params.id
        const deleteuser = await User.findByIdAndDelete({_id})
        res.send(deleteuser)
    } catch (e) {
        res.status(401).send(e);    
    }
})




//module.exports = router