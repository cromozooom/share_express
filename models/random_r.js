module.exports = {
	randomArtwork: function(artworks, number){
		var arr = [];
		while(arr.length < number){
			var randomnumber = Math.floor(Math.random() * artworks.length);

			if(arr.indexOf(randomnumber) > -1) continue;
				arr[arr.length] = randomnumber;
		}
		return arr;
		console.log(arr);
	}
}
