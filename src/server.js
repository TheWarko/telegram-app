const server = require('http').createServer();
const io = require('socket.io')(server, {
  cors: {
    allowedHeaders: ['Content-Type, Authorization, Content-Length, X-Requested-With']
  }
});

const port = process.env.PORT || 3000;
server.listen(port);
io.sockets.on('connect', onConnect);

let msgs = []

function onConnect(socket){

    socket.emit('load',msgs)
    socket.on('message', function(msg) {
      socket.emit('messages',msg)
      socket.broadcast.emit('messages',msg)
      msgs.push(msg)
    });

}

