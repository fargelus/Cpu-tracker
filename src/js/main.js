const $ = require('jquery');

$(() => {
  const socket = window.io();
  socket.on('eventClient', (cpuVal) => {
    $('#value-container').text(cpuVal);
  });

  socket.emit('eventServer', { data: 'Hello, server' });
});
