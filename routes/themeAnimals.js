var express = require('express');
var router = express.Router();
// json
var artworksThemeAnimalsJson = require('../data/theme_animals.json');
var configJson = require('../data/config.json');
// model
var modelGallery = require('../models/gallery.js');

router.get('/', function(req, res, next) {
	var pageTemplate		= "gallery";

	var config 					= configJson.config;
	var allArtworks			= artworksThemeAnimalsJson.theme_animals;
	var artworksData		= modelGallery.gallery(allArtworks);

	res.render('index', {
		title					: pageTemplate,
		pageTemplate	: pageTemplate,

		config				: config,
		artworks			: artworksData
	});
});

module.exports = router;
