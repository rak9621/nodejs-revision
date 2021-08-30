const bcrypt = require('bcryptjs')


const securepass  = async (password) => {

   const passwordHash = await bcrypt.hash(password,10)

   console.log(passwordHash)

   
       //for login matching password

       const passwordMatching = await bcrypt.compare(password,passwordHash)

       console.log(passwordMatching)

}

securepass("rakesh")
