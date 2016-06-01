var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');

var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);
var exphbs = require('express-handlebars');




var messages = [];
var sockets = [];





io.on('connection', function(socket) {
  messages.forEach(function(data) {
    socket.emit('message', data);
  });

  sockets.push(socket);

  socket.on('disconnect', function() {
    sockets.splice(sockets.indexOf(socket), 1);
    updateRoster();
  });

  socket.on('message', function(msg) {
    var text = String(msg || '');

    if (!text)
      return;

    socket.get('name', function(err, name) {
      var data = {
        name: name,
        text: text
      };

      broadcast('message', data);
      messages.push(data);
    });
  });

  socket.on('identify', function(name) {
    socket.set('name', String(name || 'Anonymous'), function(err) {
      updateRoster();
    });
  });
});

function updateRoster() {
  async.map(
    sockets,
    function(socket, callback) {
      socket.get('name', callback);
    },
    function(err, names) {
      broadcast('roster', names);
    }
  );
}

function broadcast(event, data) {
  sockets.forEach(function(socket) {
    socket.emit(event, data);
  });
}

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));
router.use(express.urlencoded()); // to support URL-encoded bodies  



var registro = require('./controllers/registro.js');
var login = require('./controllers/login.js');

var session = require('express-session');
 var cookieParser = require('cookie-parser');
 
router.use(cookieParser());

router.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'uwotm8',
    cookie: { secure: true }
}));


router.engine('handlebars', exphbs());
router.set('view engine', 'handlebars');


router.use(express.static(path.resolve(__dirname, 'views')));
//router.get('/home', function(req, res) {
//   res.redirect('home.handlebars');

 //   });
    

router.post('/usuario/registro', registro.registro);
router.post('/login', login.login);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
