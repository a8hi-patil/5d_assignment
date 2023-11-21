const multer = require("multer");
const Moment = require('../models/newMomentModel')
const addNewMomeent = async (req,res)=>{
   
   console.log(req.file)
   const path =req.file.path
   console.log(req.body.moment)
   const {title,tags}= JSON.parse(req.body.moment);
   console.log(title,tags)
   if (!title || !tags ) {
    res.status(400)
    throw new Error('All fields are mandatory')
} else {
    
    try {
        const user = await Moment.create({title,tags,path })
        console.log('Created ', user)
         res.status(200).json(user);
   
    } catch (error) {
        res.status(520).send('Something Went Wrong')
    }
        

   
}
    
}

module.exports = {addNewMomeent}