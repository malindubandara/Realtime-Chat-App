const express = require('express');
const http = require('http');
const Server = require('socket.io').Server;

const Connection = require('./db');
const mongoose = require('mongoose');
const Chat = require('./models/Chat');
const {timestamp} = require('console');

const app = express();
app.use(express.json());


Connection();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  const loadMessages = async () => {
    try {
      const messages = await Chat.find().sort({ timestamp: 1 }).exec();
      socket.emit('chat', messages);
    }
    catch (error) {
      console.error('Error loading messages:', error);
    }
  }
  loadMessages();

  socket.on('newMessage', async (msg) => {
    try{
      const newMessage = new Chat(msg)
      await newMessage.save();
      io.emit('message', msg);
    }
    catch (error) {
      console.error('Error saving message:', error);
    }
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  })
})

server.listen("3002", () => {
    console.log("running on 3002 port")
})