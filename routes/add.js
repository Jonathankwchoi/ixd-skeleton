/*
 * GET results page.
 */
exports.view = function(req, res){
    var song = req.params.song;
  
  res.render("results");
};