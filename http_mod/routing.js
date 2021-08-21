const http = require('http')
const port = process.env.port || 8000


const server = http.createServer((req,res) => {

       if(req.url =='/'){
             
           res.end("home page")
       }
       else if(req.url == '/about'){

            res.end("about us page")
       }
       else if(req.url == '/cont'){

         res.end("this is your about us page")
       }

})

server.listen(port ,(req,res) => {

    console.log(`sever ${port} is started`)
})