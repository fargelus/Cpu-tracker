// Instances
let io = require('socket.io');
const http = require('http');

// Init server
const app = http.createServer();
io = io.listen(app);
app.listen(80);

// Events
io.sockets.on('connection', (socket) => {
  socket.on('eventServer', (data) => {
    console.log(data);
    socket.emit('eventClient', { data: 'Hello, client' });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
