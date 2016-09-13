////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  $('.fadeBtn').hover(function () {
    $(this).stop().animate({opacity: '0.5', fontSize: '22px'}, 300);
  }, function () {
    $(this).stop().animate({opacity: '1', fontSize: '18px'}, 300);
  });
});