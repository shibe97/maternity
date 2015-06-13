var express = require('express');
var partials = require('express-partials');

var app = express();

app.use(partials());

app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', require('./routes/index'));
app.get('/category/:id', require('./routes/category'));
app.get('/category/:id/:sort', require('./routes/category'));
app.get('/category/:id/:sort/:page', require('./routes/category'));

/**
 * API
 *
 */
app.get('/api/category', require('./api/category'));
app.get('/api/ranking', require('./api/ranking'));
app.get('/api/items/category/:id', require('./api/items'));
app.get('/api/items/category/:id/:sort', require('./api/items'));
app.get('/api/items/category/:id/:sort/:page', require('./api/items'));

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});
