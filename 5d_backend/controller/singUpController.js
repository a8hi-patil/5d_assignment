
const User = require('../models/useModel')

const createUser = async (req, res) => {
    // console.log('Body is ', req.body)
    const { fname,lname, email,city,mobile,password, phone } = req.body;
    if (!fname || !lname || !email ||!city ||!mobile ||!password) {
        res.status(400)
        throw new Error('All fields are mandatory')
    } else {
        try {
            
        

        const existingUser = await User.find({email:req.body.email})
        // console.log(existingUser)
        if(existingUser.length == 0){
            const user = await User.create({ fname,lname, email,city,mobile,password, phone })
            // console.log('Created ', user)
             res.status(200).json(user);
        }else{
            res.status(403).send("User Already Existing")
            
        }
    } catch (error) {
            res.status(520).send('Something Went Wrong')
    }
       
    }

}

module.exports = {createUser}