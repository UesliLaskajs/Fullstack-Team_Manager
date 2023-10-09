const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const socket = require('socket.io');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/player.roots')(app);

const server = app.listen(port, () => {
    console.log(`Listening to ${port}`);
});

const io = socket(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        allowedHeaders: ['*'],
        credentials: true,
    },
});

// Simulated data (replace this with your actual data)
let serverData = 'Initial Data';

io.on('connection', (socket) => {
    console.log(`a user connected ${socket.id}`);

    // Emit initial data to the connected client
    socket.emit('initial_data', serverData);

    // Handle client-side events
    socket.on('client_event', (dataFromClient) => {
        console.log('Received data from client:', dataFromClient);

        // Simulate updating data on the server
        serverData = dataFromClient;

        // Emit updated data to all connected clients
        io.emit('data_updated', serverData);
    });

    socket.on('disconnect', () => {
        console.log(`a user disconnected ${socket.id}`);
    });
});
