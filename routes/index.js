var request = require('request');
var options = {
    url: 'http://localhost:5000/api/category',
    json: true
};

module.exports = function(req, res) {
    request.get(options, function(error, response, body){
        if (!error && response.statusCode == 200) {
            res.render('index.ejs', {
                title: 'Hello World!',
                content: 'Hello World!',
                categories: body
            });
        } else {
            console.log('error: '+ response.statusCode);
        }
    });
};
