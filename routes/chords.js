/*
 * GET chord page.
 */

var projects = require('../songs.json');

exports.view = function(request, response){
	projects["viewAlt"] = false;
	response.render('chords', projects);
};

exports.viewAlt = function(request, response){
	projects["viewAlt"] = true;
	response.render('chords', projects);
};