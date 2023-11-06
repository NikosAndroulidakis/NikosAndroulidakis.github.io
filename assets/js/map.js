let latitude = 37.983810;
let longitude = 23.727539;

let updateCounter = 0;

function updateMarker(){
	updateCounter += 1;
	latitude = latitude + getRandomArbitrary(-0.5,+1)/10000;
	longitude = longitude + getRandomArbitrary(-0.5,+1)/10000;
	var newLatLng = new L.LatLng(latitude, longitude);
	map.setView(newLatLng,14);
	marker.setLatLng(newLatLng);
	firstpolyline.addLatLng(newLatLng);
	if(updateCounter === 1){
		firstpolyline.addTo(map);
	}
}

window.setInterval(updateMarker, 100);
			
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}