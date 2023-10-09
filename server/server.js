const express = require('express');
const app = express();
const cors = require('cors');
const socketIo = require('socket.io');
const http = require('http');

const port = 8000;
const ipAddress = '0.0.0.0';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/player.roots')(app);

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        allowedHeaders: ['*'],
        credentials: true,
    },
});

let serverData = 'Initial Data';

io.on('connection', (socket) => {
    console.log(`a user connected ${socket.id}`);

    socket.emit('initial_data', serverData);

    socket.on('client_event', (dataFromClient) => {
        console.log('Received data from client:', dataFromClient);
        serverData = dataFromClient;
        io.emit('data_updated', serverData);
    });

    socket.on('disconnect', () => {
        console.log(`a user disconnected ${socket.id}`);
    });
});

server.listen(port, ipAddress, () => {
    console.log(`Server is running on http://${ipAddress}:${port}`);
});
