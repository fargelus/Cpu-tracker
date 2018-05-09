// Instances
let io = require('socket.io');
const http = require('http');
const os = require('os-utils');

// Init server
const app = http.createServer();
io = io.listen(app);
app.listen(80);

// Events
io.sockets.on('connection', (socket) => {
  socket.on('eventServer', () => {
    let cpuSendingData;

    setInterval(() => {
      os.cpuUsage((currentCpuLoadValue) => {
        cpuSendingData = currentCpuLoadValue;
      });

      socket.emit('eventClient', cpuSendingData);
    }, 1000);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
