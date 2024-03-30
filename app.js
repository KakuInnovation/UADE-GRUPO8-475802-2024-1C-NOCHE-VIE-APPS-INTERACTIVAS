const express = require('express');
const static = require('./modules/static');
const app = express();
const port = process.env.PORT || 3030;
const listen = () => console.log(`Servidor corriendo en puerto ${port}`);

app.set('views', './views')
app.listen(port, listen());

app.use(static('../public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})

//app.use(require('./routes/main.routes'));