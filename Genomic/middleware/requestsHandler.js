
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

$(document).ready(function(){
    navigator.geolocation.getCurrentPosition(function(e){

		sample={
			c2:'gym',
			c3:'night_club',
			c1:'campground'
		}

    	function user(genome,trait){
    		genome
    	}

    	var lat=e.coords.latitude;
    	var long=e.coords.longitude;
    	var num=random(0,2);
    	var key=sample['c' + String(num)];
    	getNearby(lat,long,key);
    	getGenome(key);
    });
})