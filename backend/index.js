const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});


app.use(cors());

const PORT = 5000;

app.get('/', (req, res) => {
    res.send("Server is running");
})


io.on('connection', (socket) => {
    socket.emit('me', socket.id)

    socket.on('disconnnect', () => {
        socket.broadcast.emit('callEnded')
    });

    socket.on('callUser', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("callUser", { signal: signalData, from, name })
    });

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal)
    })
})


server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));