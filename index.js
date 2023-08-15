const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/Hoja_De_Vida.html');
});

app.listen(3000, function() {
    console.log('La aplicación está escuchando en el puerto 3000.');
});