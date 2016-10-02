////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    $(window).on('load orientationchange resize', function () {
      if (window.innerWidth < window.innerHeight) {
        $('body').addClass('portrait').removeClass('landscape');
      } else {
        $('body').addClass('landscape').removeClass('portrait');
      }
    });
  }
});