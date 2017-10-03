var express = require('express');
var router = express.Router();
// json
var artworksJson = require('../data/artworks.json');
var configJson = require('../data/config.json');

// model
var modelGallery = require('../models/gallery.js');
var modelRandomArt = require('../models/random.js');


router.get('/', function(req, res, next) {
	var pageTemplate		= "home";

	var allArtworks			= artworksJson.artworks;
	var config 					= configJson.config;

	var artworksData		= modelGallery.gallery(allArtworks);
	var artworksRandom		= modelRandomArt.randomArtwork(artworksData, 6);
	console.log(artworksRandom);

	//console.log(artworksData);

	res.render('index', {
		title					: pageTemplate,
		pageTemplate	: pageTemplate,

		config				: config,
		artworks			: artworksRandom
		//console.log();
	});
});

module.exports = router;
