const express = require('express');
const app = express();
const bodyParser=require("body-parser");
const mongoose = require("mongoose");
const userModel = require("./models")
const cors=require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const port = 3001;
const mongoUrl="mongodb+srv://fanu0925:mongodb_fanu0925RG@cluster0.uvyfcr8.mongodb.net/mediaUsers?retryWrites=true&w=majority";
mongoose.connect(mongoUrl,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error",err=>{console.log(err)});
db.once("open", function () {
  console.log("Database Connected successfully!");
});

app.post('/signup', (request, response) => {
    const {fName,lName,email,pass}=request.body;
    userModel.find({email:email},(err,res)=>{
        if(res.length)
           response.json({"res":'nook'})
        else
           response.json({"res":"no!"})
      
    })
   });


//Initializes the express server on the port 30000
app.listen(port, () => console.log(`App listening on port ${port}!`));