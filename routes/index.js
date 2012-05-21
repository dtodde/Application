
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Index fast response page' })
};

exports.slow = function(req, res){
  setTimeout(function () {
	res.render('slow', { title: 'Slow response page' })
  }, 1000);
};