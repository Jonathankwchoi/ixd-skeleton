//profile from JSON file

var profile = require('../profile.json');

exports.view = function(req, res){
    console.log(profile);
	res.render("profile", profile);
};