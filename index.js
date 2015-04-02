var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.ejs', {
        title: 'Hello World!',
        content: 'Hello World!'
    });
});

app.listen(app.get('port'), function() {
      console.log("Node app is running at localhost:" + app.get('port'))
});
