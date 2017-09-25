var genome;
var nearby;

attributes={
	'gym':'bmi',
	'night_club':'morning-person',
	'campground':'motion-sickness'
}


function getGenome(trait){

	trait=attributes[trait]

	$.ajax({
		url:'http://localhost:3000?trait=' + trait,
		type:'GET',
		success:function(data){
			genome=data;
			cortana(genome,nearby);
		}
	})

}

function getNearby(latitude,longitude,type){

	$.ajax({
		url:'http://localhost:3000?latitude=' + latitude + '&longitude=' + longitude + '&keyword=' + type,
		type:'GET',
		success:function(locData){
			
			nearby=locData;
			ready=true;
			cortana(genome,nearby);
		}
	})

}
// getGenome('morning-person')
// getNearby('-33.8670522','151.1957362')