var request = require('request');
var _ = require('underscore-node');
var categories = require('../public/js/category.js');

module.exports = function(req, res) {
    var items = [];
    var sort = req.params.sort || "-score";
    var page = req.params.page || 0;
    request.get({
        url: 'http://'+req.headers.host+'/api/items/category/'+req.params.id+'/'+sort+'/'+page,
        json: true
    }, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var total = body.ResultSet.totalResultsAvailable;
            var items = _.filter(body.ResultSet[0].Result, function(item){
                return typeof item.Name !== "undefined";
            });
            items = _.map(items, function(v, k){ return v; });

        } else {
            console.log('error: '+ response.statusCode);
        }

        res.render('category.ejs', {
            title: 'Hello World!',
            content: 'Hello World!',
            selectedCategory: req.params.id,
            categories: categories,
            items: items,
            total: total,
            addFigure: function(str){
                var num = new String(str).replace(/,/g, "");
                while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
                return num;
            }
        });
    });

};
