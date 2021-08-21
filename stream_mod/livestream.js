const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000

const server = http.createServer()



server.on('request',(req,res) => {

    const rstream = fs.createReadStream("read.json")
   
    rstream.pipe(res)

})


server.listen(port,(req,res)=>{

    console.log("live stream server started")

})
