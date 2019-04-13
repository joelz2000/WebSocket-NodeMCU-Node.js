const express = require('express');

var app = express();
const server = require('http').Server(app);
var io = require('socket.io')(server);

const hostname = '192.168.0.10';
const port = 3000;


/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo\n');
});*/



/*Inicia el servidor de node.js */
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*Indica al node que inicie con un index.html */
app.use(express.static('public'));

var mensaje = [{}];

/**El io.on comprueba si hay una conexion del cliente */
io.on('connection', function(socket) {
  
    console.log('Alguien se ha conectado con Sockets');
    
    socket.emit('messages', mensaje);
  
    /* Esta funcion sirve para obtener el mensaje que se envia desde el main.js en public*/
    socket.on('new-message', function(data) {

      mensaje.push(data);

      //Imprime la informacion en la consola.
      console.log(mensaje);

        //Envia la informacion a los clientes
      io.emit('messages', mensaje);
    });
 });