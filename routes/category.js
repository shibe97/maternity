var request = require('request');

var categories = [];
request.get({
    url: 'http://localhost:5000/api/category',
    json: true
}, function(error, response, body){
    if (!error && response.statusCode == 200) {
        categories = body;
    } else {
        console.log('error: '+ response.statusCode);
    }
});

module.exports = function(req, res) {
    var items = [];
    request.get({
        url: 'http://localhost:5000/api/items/category/'+req.params.id,
        json: true
    }, function(error, response, body){
        if (!error && response.statusCode == 200) {
            items = body;
        } else {
            console.log('error: '+ response.statusCode);
        }

        res.render('category.ejs', {
            title: 'Hello World!',
            content: 'Hello World!',
            selectedCategory: req.params.id,
            categories: categories,
            items: items
        });
    });

};
