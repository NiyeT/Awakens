function main(){
	alert('main')
}

var n=0;

function notify(){

	console.log('notifying')
	$('.cortana-notification-icon').show();
	n=n+1;

	$('.cortana-icon-box').on('mousedown',function(e){
		console.log('hovering')
		$('.cortana-icon').css('height','75%');
		$('.cortana-icon').css('width','75%');
		
	})
	$('.cortana-icon-box').on('mouseup',function(e){
		$('.cortana-icon').css('height','80%');
		$('.cortana-icon').css('width','80%');
	})

	$('.notification-slide-down').css('margin-top','0');

	$('.cortana-spacer').on('click',function(){
		main();
		return false;
	})

	$('.cortana-icon-box').on('click',function(){
		main();
		return false;
	})
}


function cortana(genome,locationData){
	if(!genome || !locationData){return false};
	console.log('genome:',genome)
	console.log('locationData:',locationData);
	$('.notification-slide-down').text('Assistant: ' + locationData.names[0] + ' reccomendation');
	notify();
}