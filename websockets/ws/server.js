// https://socket.io/get-started/chat/

const express = require('express');
const socketio = require('socket.io');

const app = express();
var http = require('http').createServer(app);
var io = socketio(http);



// Chargement des fichiers statiques dans le répertoire 'public'
app.use(express.static('public'));


io.on('connection', (socket) => {
    socket.uid = Math.random().toString(12).slice(2);
    console.log('['+socket.id+'] connected');

    socket.on('disconnect', () => {
        console.log('['+socket.id+'] disconnected');
    });

    socket.on('hello world', (world) => {
        console.log('['+socket.id+'] hello world ' + world);
    });
    socket.on('id', (id) => {
        console.log('['+socket.id+'] I am "'+id+'"');
        socket.id = id;
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});


var ping = 0;
const pingTimer = setInterval(() => {
    console.log("ping " + ping);
    io.emit('ping', ping); // to all connected sockets
    ping++;
}, 3000);
