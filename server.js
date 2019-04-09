const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(server);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`App is listening on ${port}`);
});

io.on('connection', (socket) => {
  console.log('New user has joined!');
})

