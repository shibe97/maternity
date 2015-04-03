var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', require('./routes/index'));
app.get('/category/:id', require('./routes/category'));

/**
 * API
 *
 */
app.get('/api/category', require('./api/category'));
app.get('/api/ranking', require('./api/ranking'));

app.listen(app.get('port'), function() {
      console.log("Node app is running at localhost:" + app.get('port'))
});