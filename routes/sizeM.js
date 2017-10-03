var express = require('express');
var router = express.Router();
// json
var artworksSizeMediumJson = require('../data/size_medium.json');
var configJson = require('../data/config.json');
// model
var modelGallery = require('../models/gallery.js');

router.get('/', function(req, res, next) {
	var pageTemplate		= "gallery";

	var config 					= configJson.config;
	var allArtworks			= artworksSizeMediumJson.size_medium;
	var artworksData		= modelGallery.gallery(allArtworks);

	res.render('index', {
		title					: pageTemplate,
		pageTemplate	: pageTemplate,

		config				: config,
		artworks			: artworksData
	});
});

module.exports = router;
