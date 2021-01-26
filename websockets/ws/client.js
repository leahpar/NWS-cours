// https://github.com/socketio/socket.io-client

const io = require("socket.io-client");

const socket = io.connect("http://localhost:3000", {
    'reconnection': true,
    'reconnectionAttempts': 5
});

socket.on('connect', () => {
    console.log("Connected.");
    socket.emit("id", "robert");
    socket.emit("hello", "world");
});

socket.on('ping', (ping) => {
    console.log("ping : " + ping);
    socket.emit("hello world", ping);
});
socket.on('disconnect', () => {
    console.log("Disconnected.");
});
socket.on('reconnecting', () => {
    console.log("Connecting...");
});
socket.on('reconnect_failed', () => {
    console.log("Connection failed!");
    process.exit(1);
});


