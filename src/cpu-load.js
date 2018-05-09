$(() => {
  const socket = io.connect('http://localhost');
  socket.on('eventClient', (cpuVal) => {
    $('#value-container').text(cpuVal);
  });

  socket.emit('eventServer', { data: 'Hello, server' });
});
