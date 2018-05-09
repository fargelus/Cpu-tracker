// Instances
let io = require('socket.io');
const http = require('http');

// Init server
const app = http.createServer();
io = io.listen(app);
app.listen(80);

// Events
io.sockets.on('connection', (socket) => {
  socket.on('eventServer', () => {
    let timer = 0;
    setInterval(() => {
      socket.emit('eventClient', timer);
      timer += 1;
    }, 1000);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
