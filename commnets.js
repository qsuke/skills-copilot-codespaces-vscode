// Create web server
var express = require('express');
var app = express();
// Create web server
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
// Create socket
var fs = require('fs');
var path = require('path');
// Create file system
var comments = [];
// Create comments
server.listen(3000, function() {
    console.log('server is running on port 3000');
});
// Listen port 3000
app.use(express.static(path.join(__dirname, 'public')));
// Set static files
io.on('connection', function(socket) {
    socket.emit('loadComments', comments);
    // Load comments
    socket.on('comment', function(comment) {
        comments.push(comment);
        io.emit('comment', comment);
    });
    // Create comment
});
// Create comment