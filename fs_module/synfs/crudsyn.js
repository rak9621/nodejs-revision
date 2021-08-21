const fs = require("fs");

//create

//fs.writeFileSync('read.txt',"hello rakesh ,kya kr rhe ")

//update
//fs.appendFileSync('read.txt',"kuch nhi ,i am good")

//read

//const buf_data =fs.readFileSync('read.txt')
//console.log(buf_data)

//const data  = buf_data.toString();//buffer data ko string me convert krna 
//console.log(data)


//rename file

fs.renameSync('read.txt' ,'readWrite.txt')



