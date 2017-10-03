var express = require('express');
var router = express.Router();
// json
var configJson = require('../data/config.json');
// model

router.get('/', function(req, res, next) {
	var pageTemplate	= "paf";
	var config 				= configJson.config;

	res.render('index', {
		title				: pageTemplate,
		pageTemplate		: pageTemplate,
		config				: config
	});
});

module.exports = router;
