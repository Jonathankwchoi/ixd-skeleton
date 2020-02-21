// Get instructor from JSON file

var instructors = require('../instructors.json');

exports.view = function(req, res){
    console.log(instructors);
	res.render("instructor", instructors);
};