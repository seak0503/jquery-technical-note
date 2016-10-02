////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  if (window.devicePixelRatio == 1) {
    $('.deviceImg').attr('src', 'img/img300.jpg');
  } else if (window.devicePixelRatio == 2) {
    $('.deviceImg').attr('src', 'img/img600.jpg');
  } else if (window.devicePixelRatio == 3) {
    $('.deviceImg').attr('src', 'img/img900.jpg');
  }
});