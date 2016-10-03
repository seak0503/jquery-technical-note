////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    $('p > span').text(scrollTop);
  });
});