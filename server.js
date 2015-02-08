var net = require('net');

net.createServer(function(socket) {
    socket.setEncoding('utf8');
    
    socket.write('Welcome to hivemind!\r\n');

    socket.on('data', function(data) {
        console.log('client connected');    
    });

    socket.on('end', function() {
        console.log('client disconnected');
    });
    
}).listen(6667);