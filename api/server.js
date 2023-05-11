const express = require('express');
const app = express();
const bodyParser=require("body-parser");
const mongoose = require("mongoose");
const userModel = require("./models")
const cors=require("cors");
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);
const { addUser, removeUser, getUser,
  getUsersInRoom } = require("./User");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const port = 5000;
const mongoUrl="mongodb+srv://fanu0925:mongodb_fanu0925RG@cluster0.uvyfcr8.mongodb.net/mediaUsers?retryWrites=true&w=majority";
mongoose.connect(mongoUrl,
  {
    useNewUrlParser: true,
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
   
   io.on("connection", (socket) => {
    socket.on('join', ({ name, room }, callback) => {
 
        const { error, user } = addUser(
            { id: socket.id, name, room });
 
        if (error) return callback(error);
 
        // Emit will send message to the user
        // who had joined
        socket.emit('message', { user: 'admin', text:
            `${user.name},
            welcome to room ${user.room}.` });
 
        // Broadcast will send message to everyone
        // in the room except the joined user
        socket.broadcast.to(user.room)
            .emit('message', { user: "admin",
            text: `${user.name}, has joined` });
 
        socket.join(user.room);
 
        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        });
        callback();
    })

    socket.on('disconnect', () => {
      const user = removeUser(socket.id);
      if (user) {
          io.to(user.room).emit('message',
          { user: 'admin', text:
          `${user.name} had left` });
      }
  })

})








server.listen(process.env.PORT || 5000,
  () => console.log(`Server has started.`));