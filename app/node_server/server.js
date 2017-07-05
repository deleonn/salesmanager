var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, function(){
  console.log('Connected on port 3000');
});

var clients = 0;

app.get('/',function(req,res){
  res.status(200).send('sdf');
});

io.on('connection', function (socket) {

  clients++;
  console.log("\033[0;32m +\033[0m clients: " + clients);

    socket.on('deliver', (data) => {
        io.emit('emit', {type:'new-deliver', text: data});
        console.log(data);
    });

    socket.on('disconnect', function() {
      clients--;
      console.log("\033[1;31m -\033[0m clients: " + clients);
    });
  });
