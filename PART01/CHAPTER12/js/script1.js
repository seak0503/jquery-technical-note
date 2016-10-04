////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  $('body').append('<a href="javascript:void(0);" id="fixedTop">▲</a>');
  $('#fixedTop').on('click', function () {
    $('html,body').animate({scrollTop:'0'},500);
  });
});