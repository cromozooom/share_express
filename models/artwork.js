module.exports = {
	artwork: function(artworks, selected) {

		//console.log("artworks.length: " + artworks.length);
		//console.log("caut: " + selected);
		var art = {}; // is the curent artwork
		var first = {};
		var last = {};

		// loop artworks to find the one who hhas the tile like in the link
		for(var i=0; i < artworks.length; i++) {
			if(artworks[i].link == selected){

				if(i==0){
					// console.log(i + " from " + artworks.length + " - case 1");
					first.order = "0";
					first.link = "/gallery_calinalefter/all";
					first.titleArtwork = "view All";
					first.id = 0;
					art[0] = first;
					art[1] = artworks[i];
					art[1].order = "1";
					art[2] = artworks[i+1];
					art[2].order = "2";
				}
				if(i>0 && i<artworks.length-1){
					// console.log(i + " from " + artworks.length  + " - case 2");
					art[0] = artworks[i-1];
					art[0].order = "0";
					art[1] = artworks[i];
					art[1].order = "1";
					art[2] = artworks[i+1];
					art[2].order = "2";
				}
				if(i==artworks.length-1){
					// console.log(i + " from " + artworks.length + " - case 3");
					art[0] = artworks[i-1];
					art[0].order = "0";
					art[1] = artworks[i];
					art[1].order = "1";
					last.order = "0";
					last.link = "/gallery_calinalefter/all";
					last.titleArtwork = "view All";
					last.id = 0;

					art[2] = last;
				}

				//console.log("am gasit: " + artworks[i].link);
				//console.log(artworks[0]);
				//console.log(artworks[1]);
				//console.log(artworks[2]);


			}
		}
		return art;
	}
}
