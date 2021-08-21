const fs = require('fs')

//create

// fs.writeFile('read.txt',"this is async method for handel file", (err) => {

//    console.log("file is now created")
// })


//update
// fs.appendFile('read.txt' ,"isko revision ke taur pr sikh rhe ho" ,(err)=>{

//     console.log("data is now appended")
// })

//read

 fs.readFile('read.txt' ,'utf-8',(err,res) => {

    console.log(res)
})







