// Get songs from JSON file

var data = require('../songs.json');

exports.view = function(req, res) {
    console.log(data);
	res.render("add", data);
};

exports.addSong = function(req, res) {    
	var newSong = {
	  "name": req.query.name,
	  "id": req.query.id,
	  "lyrics": req.query.lyrics
	}
	data.songs.push(newSong);
	res.render('add', data);
	console.log("Song added");
 };