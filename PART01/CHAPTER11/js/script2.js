////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  $(window).on('load scroll resize', function () {
    var scrollTop = $(window).scrollTop();
    $('p > span').text(scrollTop);

    var posBottom = $(document).height() - window.innerHeight;
    if (scrollTop >= posBottom) {
      $('p').addClass('scrollBottom');
    } else {
      $('p').removeClass('scrollBottom');
    }
  });
});