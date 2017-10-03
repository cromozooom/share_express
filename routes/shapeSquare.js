var express = require('express');
var router = express.Router();
// json
var artworksShapeSquareJson = require('../data/shape_square.json');
var configJson = require('../data/config.json');
// model
var modelGallery = require('../models/gallery.js');

router.get('/', function(req, res, next) {
	var pageTemplate		= "gallery";

	var config 					= configJson.config;
	var allArtworks			= artworksShapeSquareJson.shape_square;
	var artworksData		= modelGallery.gallery(allArtworks);

	res.render('index', {
		title					: pageTemplate,
		pageTemplate	: pageTemplate,

		config				: config,
		artworks			: artworksData
	});
});

module.exports = router;
