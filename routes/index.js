var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Game Of Life' });
});

router.get('/gol/lib/structs-lib', function(req, res, next) {
	res.status(200).sendFile("gol_structs.json", { root: path.join(__dirname, '../json') }, (err) => {
		if (err) res.status(204).json({isError: true}).end();
	});
});

module.exports = router;
