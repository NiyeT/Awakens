create('.master-wrapper','.body	');
create('.navigation-wrapper','.master-wrapper');
create('.icon-wrapper','.navigation-wrapper');
$('.icon-wrapper').css('float','right');
create('.icon-spacer','.navigation-wrapper');
$('.icon-spacer').css('width',$(window).width()-($('.icon-spacer').height()*2));
$('.icon-spacer').css('float','right');
create('.icon-wrapper','.navigation-wrapper');
$('.icon-wrapper').css('width',$('.icon-wrapper').height());
create('.icon-container','.icon-wrapper','a');
create('img','.icon-image','.icon-container','a');
$('.icon-image').eq(0).attr('src','./images/search_icon.png');
$('.icon-image').eq(1).attr('src','./images/menu_icon.png');
create('.main-wrapper','.master-wrapper');
create('.title-container','.main-wrapper');
create('.title-container-top','.title-container');
create('.title-container-bottom','.title-container');
create('.main-image-wrapper','.main-wrapper',3);
create('.main-image-container','.main-image-wrapper','a');
create('.main-image-box','.main-image-container','a');
$('.main-image-box').eq(0).css('float','right');
$('.main-image-box').eq(1).css('float','right');
$('.main-image-box').eq(2).css('float','right');

create('.main-image-box','.main-image-container','a');
// $('.main-image-box').eq(3).css('float','right')
// $('.main-image-box').eq(4).css('float','right')
// $('.main-image-box').eq(5).css('float','right')

$('.main-image-box').css('width',$('.main-image-box').height())
create('img','.main-image','.main-image-box','a');
