// Get songs from JSON file

var songs = require('../songs.json');

exports.view = function(req, res){
    console.log(songs);
	res.render("add", songs);
};