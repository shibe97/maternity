var request = require('request');
var _ = require('underscore-node');
var options = {
    url: 'http://localhost:5000/api/category',
    json: true
};

module.exports = function(req, res) {
    request.get(options, function(error, response, body){
        if (!error && response.statusCode == 200) {
            res.render('category.ejs', {
                title: 'Hello World!',
                content: 'Hello World!',
                categories: body,
                selectedCategory: req.params.id
            });
        } else {
            console.log('error: '+ response.statusCode);
        }
    });
};
