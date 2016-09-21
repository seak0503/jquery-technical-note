////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function(){
  $('a:has(.ttpShow)').mouseover(function(e){
    $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
    $('#ttpPanel').css({top:(e.pageY+10) + 'px',left:(e.pageX+10) + 'px'}).fadeIn('fast');
  }).mousemove(function(e){
    $('#ttpPanel').css({top:(e.pageY+10) + 'px',left:(e.pageX+10) + 'px'});
  }).mouseout(function(){
    $('#ttpPanel').remove();
  });
});
