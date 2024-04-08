const express = require('express');
const data = require('./server/data.js')
const app = express();
const PORT = process.env.PORT || 3000;

const cc = data.data.colo_colo;
const players = data.data.players;

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('rest');
});

app.get('/history', (req, res) => {
    res.status(200).json(cc);
});

app.get('/players', (req, res) => {
    res.status(200).json(players)
})

app.get('/players/:number', (req, res) => {
    const playerNumber = req.params.number;
    const player = Object.values(players).find(player => player.number === parseInt(playerNumber));

    if (player) {
        res.status(200).json(player);
    } else {
        res.status(404).json({ message: 'Jugador no encontrado' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
