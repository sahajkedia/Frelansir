var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});
io.on('connection', (socket) => {

  console.log('made socket connection', socket.id);

  // Handle chat event
  socket.on('chats', function(data){
      // console.log(data);
      io.sockets.emit('chats', data);
  });

  // Handle typing event
  socket.on('typing', function(data){
      socket.broadcast.emit('typing', data);
  });

});