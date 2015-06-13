var request = require('request');
var _ = require('underscore-node');
var categories = require('../public/js/category.js');

module.exports = function(req, res) {
    var items = [];
    request.get({
        url: 'http://'+req.headers.host+'/api/ranking',
        json: true
    }, function(error, response, body){
        if (!error && response.statusCode == 200) {
            items = body;
        } else {
            console.log('error: '+ response.statusCode);
        }
        console.log(categories);

        res.render('index.ejs', {
            title: 'Hello World!',
            content: 'Hello World!',
            selectedCategory: req.params.id,
            categories: categories,
            items: items
        });
    });

};
