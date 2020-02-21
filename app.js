
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var menu = require('./routes/menu');
var chords = require('./routes/chords');
var search = require('./routes/search');
var instructor = require('./routes/instructor');
var calls = require('./routes/calls');
var add = require('./routes/add');
var addSong = require('./routes/add');
var blob = require('./routes/blob');
var profile = require('./routes/profile');
var edit = require('./routes/edit');
//var login = require('./routes/login');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
// Example route
// app.get('/users', user.list);
app.get('/chords', chords.view);
app.get('/search', search.view);
app.get('/instructor', instructor.view);
app.get('/calls', calls.view);
app.get('/add?name=', add.addSong);
app.get('/add', add.view);
app.get('/addSong', add.addSong);
app.get('/menu', menu.view);
app.get('/blob', blob.view);
app.get('/profile', profile.view);
app.get('/edit', edit.editProfile);
//app.get('/login', login.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
