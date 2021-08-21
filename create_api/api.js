const http = require("http")
const fs = require("fs")

const port = process.env.port || 3000

const server = http.createServer((req,res) => {

   
      
    if(req.url == '/'){

        res.end("this is our home page of api")
    }    
    else if(req.url == '/api'){
          
        const buf_data = fs.readFile('user.json' ,'utf-8', (err,data) => {

          const objdata = JSON.parse(data)//string data ko json data me convert krna
            
          //console.log(jsondata)

          res.end(objdata)

        })
        
        
    }

})

server.listen(port ,() => {

    console.log(`server ${port} is started`)

})