const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 8000;
const functions = require("./functions")
const app = express();
const server = http.createServer(app);

let games = {}

const io = socketIo(server, {  cors: {    origin: "*",    methods: ["GET", "POST"]  }});


io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("createRoom", (data)=>{functions.createGame(data, games)})
  socket.on("joinRoom", (data)=>{functions.joinGame(data, games, io)})
  socket.on("change", (data)=>{functions.stateChange(data, games, io)})

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));