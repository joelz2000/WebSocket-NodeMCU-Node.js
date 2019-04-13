var socket = io.connect('http://192.168.0.10:3000', { 'forceNew': true });


function addMessage(e) {

  /*Obtiene el dato que manda por el formulario */
	var mensajeArray = document.getElementById('mensaje').value;

    /* El emit manda el mensaje al servidor en app.js en node.js */
  socket.emit('new-message', mensajeArray);
  return false;
}