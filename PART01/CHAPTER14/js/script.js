////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var setFixed = $('#menuList'),
      menuTop = setFixed.offset().top;

  $(window).on('load scroll resize', function () {
    if ($(window).scrollTop() > menuTop) {
      setFixed.css({top:'0', position:'fixed'});
    } else {
      setFixed.css({top:'auto', position:'static'});
    }
  });
});