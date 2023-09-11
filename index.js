var express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes')
const admin = require("firebase-admin");
const serviceAccount=require("./firebase/service-account.json")
const dotenv = require('dotenv').config()


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),

});


// allowing cors
app.use(cors())
app.use("/api",router)

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())


 

//creating server
const httpServer = require("http").createServer(app);
const PORT = '7000'
app.listen(process.env.PORT||PORT, () => {
    console.log(`Server Listening`);
});


app.get("/", (req, res) => {
  res.send("Hello from backend");
});








