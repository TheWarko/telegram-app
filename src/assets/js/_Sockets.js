    var app = require('express')();
    var http = require('http').createServer(app);
    // var io = require('socket.io')(http);

    // const init = () => {
        app.get('/', (req, res) => {
            res.sendFile(__dirname + 'dist');
        });

    //     // io.on('connection', (socket) => {
    //     //     console.log('a user connected');
    //     // });

        http.listen(3000, () => {
            console.log('listening on *:3000');
        });
    // }
    // init()