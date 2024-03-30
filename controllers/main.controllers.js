const { index } = require('../models/product.model');

module.exports = {
    index: (req, res) => res.render('home', {
        products: index(),
        styles: ['home']
    })
}