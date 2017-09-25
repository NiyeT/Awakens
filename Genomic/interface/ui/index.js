function windowSeal(){
	create('.master-wrapper','.body');
	create('.background-wrapper main-wrap','.master-wrapper');
	create('.content-wrapper main-wrap','.master-wrapper')
	create('.notification-wrapper main-wrap','.master-wrapper');
	create('.cortana-wrapper main-wrap','.master-wrapper')
	$('.main-wrap').css('height',$(window).height());
	$('.main-wrap').css('width',$(window).width());
}

function background(){
	create('.background-container','.background-wrapper');
	create('img','.background-image','.background-container','a');
	$('.background-image').attr('src','https://forums.macrumors.com/attachments/570540/');
	$('.background-image').css('height',$(window).height())
	$('.background-image').css('width',$(window).width())
}

function notifications(){
	create('.notification-container','.notification-wrapper');
	create('.notification-slide-down','.notification-container');
}

function content(){
	create('.content-container','.content-wrapper');
	create('.content-header','.content-container');
}

function cortana(){
	create('.cortana-spacer','.cortana-wrapper');
	create('.cortana-chunk','.cortana-wrapper');
	create('.cortana-icon-box','.cortana-chunk');
	$('.cortana-icon-box').css('width',$('.cortana-icon-box').height());
	create('.cortana-notification-image cortana-layers','.cortana-icon-box');
	create('.cortana-assistant-image cortana-layers','.cortana-icon-box');
	$('.cortana-layers').css('height',$('.cortana-icon-box').height());
	$('.cortana-layers').css('width',$('.cortana-icon-box').width());
	create('img','.cortana-icon','.cortana-assistant-image','a');
	$('.cortana-icon').attr('src','https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_assistant-128.png')
	create('.cortana-notification-spacer','.cortana-notification-image');
	create('.cortana-notification-icon','.cortana-notification-spacer');
	$('.cortana-notification-icon').text('1');
	$('.cortana-notification-icon').hide();
}

windowSeal()
background();
notifications();
content();
cortana()