var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// json
var artworksJson = require('../data/artworks.json');
var configJson = require('../data/config.json');
var credsJson = require('../data/creds.json');
// model
var modelGallery = require('../models/gallery.js');
var modelArtwork = require('../models/artwork.js');


router.get('/:contactTraking/:contactSource', function(req, res, next) {
	// json
	var config 					= configJson.config;
	var creds						= credsJson.mail;
	// artwork traking data
	var allArtworks			= artworksJson.artworks;
	var artworksData		= modelGallery.gallery(allArtworks);
	//var artwork				= modelArtwork.artwork(artworksData, artworkName);

	// traking params
	var contactTraking = req.params.contactTraking;
	var contactSource = req.params.contactSource;
	var pageTemplate = "contact";

	//console.log(contactTraking + " " + contactSource );
	res.render('index', {
		creds				: creds,
		config					: config,
		//artwork for traking
		artworks			: artworksData,
		// traking params
		contactTraking 		: contactTraking,
		contactSource 		: contactSource,
		// page data
		title				: 'contact',
		pageTemplate		: pageTemplate
	});
});

router.post('/:contactTraking/:contactSource/send', function(req, res, next){
	// json
	var creds			= credsJson.mail;

	var contactTraking = req.params.contactTraking;
	var contactSource = req.params.contactSource;
	console.log(contactTraking + " " + contactSource );
	var transporter = nodemailer.createTransport({
		// traking params
		contactTraking 		: contactTraking,
		contactSource 		: contactSource,

		creds : creds,
		service: creds.mailService,
		auth: {
			user: creds.mailAcount,
			pass: creds.mailPass
		}
	});

	var mailOptions = {
		contactTraking : contactTraking,
		contactSource : contactSource,
		from: 'Calina - website <cromozooom@gmail.com>',
		to: 'cromozooom@gmail.com',
		text: 'you have a new email from: Name: ' + req.body.name + ', traking:'+ req.body.traking + ' Traking: '+ contactTraking + ' '+ contactSource + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
		html: '<p>you ot a new submition with following details<p/><table><tr><td><strong>name: </strong></td><td>' + req.body.name + '</td></tr><tr><td><strong>email: </strong></td><td>' + req.body.email + '</td></tr><tr><td><strong>tracking: </strong></td><td>' + req.body.traking + '</td></tr><tr><td><strong>spam filter: </strong></td><td>' + req.body.firm + '</td></tr><tr><td><strong>message: </strong></td><td>' + req.body.message + '</td></tr></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {

			console.log('Message send: ' + info.response);
			res.redirect('/thanks');
		}
	});
});

module.exports = router;
