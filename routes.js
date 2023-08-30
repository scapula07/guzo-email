const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router();
const emailController = require("./emailController");

router.use(express.urlencoded({extended: true}))
router.use(bodyParser.json())


router.post("/send-email",emailController.sendEmail)
module.exports = router;  