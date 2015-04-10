var request = require('request');
var categories = require('../public/js/category.js');

module.exports = function(req, res) {
    var options = {
        url : "http://shopping.yahooapis.jp/ShoppingWebService/V1/json/itemSearch?appid=dj0zaiZpPWFpTUtSelNTSEpKOSZzPWNvbnN1bWVyc2VjcmV0Jng9OWE-&affiliate_type=vc&affliate_id=http%3a%2f%2fck%2ejp%2eap%2evaluecommerce%2ecom%2fservlet%2freferral%3fsid%3d3200517%26pid%3d883331068%26vc_url%3d&query="+categories[req.params.id].name+"&hits=24",
        json: true
    };
    request.get(options, function(error, response, body){
        if (!error && response.statusCode == 200) {
            res.send(body);
        } else {
            console.log('error: '+ response.statusCode);
        }
    });
};
