const http = require("http")
const port = process.env.port || 3000


const server = http.createServer((req,res)=>{

res.end("hello rak")

})


server.listen(port,(req,res) =>{

    console.log("server is now started")
})




