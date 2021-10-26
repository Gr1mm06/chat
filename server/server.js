const express = require('express');
const initDB = require('./db');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(
    bodyParser.json({
        limit:'20mb'
    })
)
app.use(
    bodyParser.urlencoded({
        limit:'20mb',
        extended:true
    })
)

module.exports.io = socketIO(server);
require('./sockets/socket');
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});

initDB();