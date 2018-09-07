var express = require('express');
var atob = require('atob');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/analytics-data', function(req, res, next) {
  	output = decodeatob(JSON.parse(JSON.stringify(req.headers))['content-md5']);
  	res.header("Access-Control-Allow-Origin", "*");
  	res.header('Access-Control-Allow-Methods', 'POST');
  	res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	res.end();
	console.log(output);
});

router.post('/google-analytics', function(req, res, next) {
  res.end();
});

function decodeatob(input){
	return JSON.parse(atob(input));
}

module.exports = router;
