module.exports = {
	randomArtwork: function(artworks, number){

		if(number > artworks.length) // check if we have enouth Artwork
			number = artworks.length;

		var artRandom = []; // aray of random artwork
		var numRandom = []; // random number non repeated

		while(artRandom.length < number){ // when the number of random artwork is smaller than number
			var randomnumber = Math.floor(Math.random() * artworks.length); // give me one random number (until artworks.lenght)

			if(numRandom.indexOf(randomnumber) > -1) // search inside artRandom if has same number inside "randomnumber"
				continue; // make the test again if
			numRandom[numRandom.length] = randomnumber;
			artRandom[artRandom.length] = artworks[randomnumber];
			//console.log(artRandom);
		}
		//console.log(numRandom);
		return artRandom;
	}
}
