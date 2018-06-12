// Экспресс -> обертка над стандартным http сервером
// Init server
const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = 3000;

// WebSockets
let io = require('socket.io')(http);
const os = require('os-utils');

// Как только клиент обратился к серверу =>
// отсылаем нашу вьюху
app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});

app.use(express.static('public'));

// Все запросы на 3000 порт,
// стандартный 80 требует root прав от ноды
http.listen(port, () => {
  console.log(`On ${port} running`);
});

// Socket events
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
