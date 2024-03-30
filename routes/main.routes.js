const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    //res.sendFile(__dirname + '/views/home.html'); 
    res.render("home.html");
})

module.exports = router