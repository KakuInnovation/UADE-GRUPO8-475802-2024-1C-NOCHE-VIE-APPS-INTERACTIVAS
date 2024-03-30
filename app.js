const express = require('express');
//const static = require('./modules/static');
const app = express();

//PREPARO EL SERVER
const port = process.env.PORT || 3000;
const listen = () => console.log(`Servidor corriendo en puerto ${port}`);

//app.set('views', './views')
app.listen(port, listen());

//app.use(static('../public'))
app.get('/', (req, res) => {
    //    console.log(__dirname + '/views/home.html');
    res.sendFile(__dirname + '/views/home.html');
})

// RUTAS
//app.use('/', require('./routes/main.routes'));