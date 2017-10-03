var express 				= require('express');
var router 					= express.Router();
// json
var artworksJson 		= require('../data/artworks.json');
var configJson 			= require('../data/config.json');
// model
var modelGallery 		= require('../models/gallery.js');
var modelArtwork 		= require('../models/artwork.js');

router.get('/:artworkName', function(req, res, next) {
	var artworkName 	= req.params.artworkName;
	var pageTemplate	= "artwork";

	var config				= configJson.config;
	var allArtworks		= artworksJson.artworks;
	var artworksData	= modelGallery.gallery(allArtworks);
	var artwork				= modelArtwork.artwork(artworksData, artworkName);

	res.render('index', {
		title						: artworkName,
		pageTemplate		: pageTemplate,

		config					: config,
		artworkName			: artworkName,
		art							: artwork

		//art: artworksData
	});
});

module.exports = router;
