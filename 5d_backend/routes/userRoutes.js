const express = require('express');

const router = express.Router();
const { createUser } = require('../controller/singUpController')
const { addNewMomeent } = require('../controller/addNewMomentController');
const { upload } = require('../middleware/fileUpload');





router.route('/').post(createUser)
router.route('/upload').post(upload.single('file'),addNewMomeent)


module.exports = router;