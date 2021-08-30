const Student = require('./model/model')
const server = require('./connection/server')


// ->  create document 

const createDocumment = async () => {

    try {
        
        const studentdata = new Student({

            name:"adi",
            branch:"ee",
            email:"adi32@gmail.com"
    
          })
        
          const result = await studentdata.save()
          console.log(result)

    } catch (error) {

        console.log("data not save ")
        
    }

}

createDocumment()

//-> read


// const readDocument = async () => {

//      const result = await Student.find()
//      console.log(result)

// }

// readDocument()


// -> update 


// const updateDocument = async (_id) => {

//    try {

//         const result = await Student.findByIdAndUpdate( {_id} ,{
            
//             $set:{

//                 name:"sant gupta"
//             }

//         })

//         console.log(result)
//         console.log("update successfully")

    
//    } catch (error) {
    
//        console.log("not sucessfully updated")

//    }       
   
// }

// updateDocument("612242e84c54c247703644e8")



// -> deleteDocument


// const deleteDocument = async ( _id ) => {
 
//                   try {

//         const result = await Student.findByIdAndDelete( {_id} )

//         console.log(result)
         
//         console.log("delete sucessfull")

    
//    } catch (error) {
    
//        console.log("deletion not succesfull")

//    }       

// }

// deleteDocument("61224507283e1560986bfb3a")







