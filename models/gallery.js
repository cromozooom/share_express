module.exports = {
	gallery: function(artworksJson, config){
		//console.log("artworksJson.length: " + artworksJson.length);
		var artworksData = []; // every artwork data
		var discountEtsy = 0.9; // discount from etsy 
		var ctaBuy = "Buy Now"; //
		var ctaOrder = "Order Now";
		var ctaImposibleToDo = "not available under order";

		for(var i=0; i<artworksJson.length; i++){
			artworksData[i] = artworksJson[i];

			artworksData[i].yearArtwork = artworksData[i].idArtwork.toString().substring(0, 4);
			artworksData[i].titleLinkFriendly =  artworksJson[i].titleArtwork.toLowerCase().split(' ').join('-').replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g , '');
			artworksData[i].link = artworksData[i].titleLinkFriendly + "_artwork-by-calina-lefter";

			// copy of CTA
			if (artworksJson[i].availableFilter === true) {
				artworksData[i].available = "available";
				artworksData[i].ctaCopy = ctaBuy
			} else {
				artworksData[i].available = "notAvailable";
				if (artworksJson[i].posibleToDo == true )
					artworksData[i].ctaCopy = ctaOrder
				else {
					artworksData[i].ctaCopy = ctaImposibleToDo
				}
			}

			// PRICE
			if(artworksData[i].linkStore !== false){
				artworksData[i].priceDiscounted = artworksData[i].price * discountEtsy
			}

			if (artworksJson[i].imgSimulation > 0) {
				artworksData[i].mainImageSufix = "_sim";
			}  else {
				artworksData[i].mainImageSufix = "_1";
			}

			artworksData[i].imageGalleryLarge = "/images/" + artworksData[i].titleLinkFriendly + "_artwork-by-calina-lefter/large/" + artworksData[i].titleLinkFriendly + "_artwork-by-calina-lefter";
			artworksData[i].imageGalleryMedium = "/images/" + artworksData[i].titleLinkFriendly + "_artwork-by-calina-lefter/medium/" + artworksData[i].titleLinkFriendly + "_artwork-by-calina-lefter";
			artworksData[i].imageGallerySmall = "/images/" + artworksData[i].titleLinkFriendly + "_artwork-by-calina-lefter/small/" + artworksData[i].titleLinkFriendly + "_artwork-by-calina-lefter";
			artworksData[i].imageGalleryThumbnail = "/images/" + artworksData[i].titleLinkFriendly + "_artwork-by-calina-lefter/thumbnail/" + artworksData[i].titleLinkFriendly + "_artwork-by-calina-lefter";




			//console.log(artworksData);
			// transform inch in cm 0.39370079
			artworksData[i].widthInch = Math.round(artworksData[i].width * 0.39 * 10) / 10;
			artworksData[i].heightInch = Math.round(artworksData[i].height * 0.39 * 10) / 10;
			artworksData[i].thicknessInch = Math.round(artworksData[i].thickness * 0.39 * 10) / 10;

			artworksData[i].sizeInch = "(" + artworksData[i].widthInch + " x " + artworksData[i].heightInch + " x " +artworksData[i].thicknessInch + " inch)"
			artworksData[i].sizeCm = "(" + artworksData[i].width + " x " + artworksData[i].height + " x " +artworksData[i].thickness + " cm)"

			artworksData[i].metaKeywords = artworksData[i].style + " " + artworksData[i].thema + " " + artworksData[i].color + " " + artworksData[i].themeFilter + " " + artworksData[i].sizeFilter;
			// add artworkLink to the array



			if(artworksData[i].imgSimulation > 0) {
				artworksData[i].metaThumbnail = "/images/" + artworksData[i].titleLinkFriendly + "_artwork-by-Calina-Lefter/thumbnail/" + artworksData[i].titleLinkFriendly + "_artwork-by-Calina-Lefter_sim.jpg";
			} else {
				artworksData[i].metaThumbnail = "/images/" + artworksData[i].titleLinkFriendly + "_artwork-by-Calina-Lefter/thumbnail/" + artworksData[i].titleLinkFriendly + "_artwork-by-Calina-Lefter_1.jpg";
			};
			artworksData[i].titlePage = artworksData[i].titleArtwork.toUpperCase() + " - size " + " " + artworksData[i].sizeFilter + " - artwork " + artworksData[i].shortDescription + " " + artworksData[i].sizeInch;



			//  SUMMER AFTERNOON -
			//  s size
			//  artwork
			//  , PALETTE KNIFE Oil Painting On Canvas figurative,
			//  wall art, art decco, birch
			//  art artwork by Calina Lefter
			//  - size: 8&rsquo; 8&rsquo; 1,6&rsquo; (20 X 20 X 4cm)

		}
		return artworksData;
	}
}
