const express = require('express');

 const socket = require('socket.io');

 const app = express();

 

 const server = app.listen(8000,function(){
     console.log("Ther server is listening on port 8000");
 });

 app.use(express.static('public'));

 var io = socket(server);
 io.on('connection',function(socket){

 socket.on("chat",function(data){

  io.sockets.emit("chat",data);

 });
socket.on("typing",function(data){
    socket.broadcast.emit("typing",data);
});
 });
