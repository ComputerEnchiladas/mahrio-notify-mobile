process.env.NODE_URL = '192.168.0.6';
process.env.NODE_PUBLIC_PATH = './';
process.env.NODE_ENV = "development";

require('mahrio').runServer(process.env, __dirname).then(function (server) {
  var io = require('socket.io').listen(server.listener);

  var state = 1;
  setInterval(function () {
    io.sockets.emit('blink:led', state = !state);
  }, 3000);
});
