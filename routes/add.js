// Get songs from JSON file

var data = require('../songs.json');

exports.view = function(req, res) {
    console.log(data);
	res.render("add", data);
};

exports.addSong = function(req, res) {    
	// Your code goes here
	var newSong = {
	  "name": req.query.name,
	  "lyrics": req.query.lyrics
	}
	data.songs.push(newSong);
	response.render('add', data);
	console.log("Song added");
 };