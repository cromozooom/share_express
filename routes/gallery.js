var express = require('express');
var router = express.Router();
// json
var artworksJson = require('../data/artworks.json');
var configJson = require('../data/config.json');
// model
var modelGallery = require('../models/gallery.js');

router.get('/:filter', function(req, res, next) {
	var filter = req.params.filter;

	//

	// THEMEFILTER
			//- animals
			//- landscapeSubject
			//- abstract
			//- other
	// SIZEFILTER
			//- small
			//- medium
			//- large
			//- xlarge
	// SHAPE
			//- landscape
			//- portrait
			//- square
			//- mixt


	//router.get('/', function(req, res, next) {
	var pageTemplate		= "gallery";

	var config 					= configJson.config;
	var allArtworks			= artworksJson.artworks;
	var artworksData		= modelGallery.gallery(allArtworks);


	res.render('index', {
		title					: pageTemplate,
		pageTemplate	: pageTemplate,

		filter				: filter,
		config				: config,
		artworks			: artworksData
		//console.log(filter);
	});
});

module.exports = router;
