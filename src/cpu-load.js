$(() => {
  const socket = io.connect('http://localhost');
  socket.on('eventClient', (timerVal) => {
    $('#timer').text(timerVal);
  });

  socket.emit('eventServer', { data: 'Hello, server' });
});
