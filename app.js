const { dir } = require('console');
const express = require('express');
const app = express();


app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo...');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})
