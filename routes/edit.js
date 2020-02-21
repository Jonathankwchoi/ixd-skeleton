/*
 * GET profile.
 */
var data = require('../profile.json');
exports.view = function(req, res){
    res.render('edit');
};
exports.editProfile = function(req, res) {
    // Your code goes here
	var newUser = {
        "bio": req.query.description,
        "email": req.query.email,
        "phone": req.query.phone,
        "image": "/pictures/profile.png",
      }
      data.user.pop();
      data.user.push(newUser);
      res.render('profile', data);
      console.log("Done!");
    };