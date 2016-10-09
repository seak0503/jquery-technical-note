////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var setElm = $('.delayLoad > ul > li'),
      delayTime = 100;
  console.log("デバッグ setElm");
  console.log(setElm);

  $(window).load(function () {
    setElm.each(function (i) {
      $(this).delay(i * delayTime).css({visibility:'visible', opacity:'0'}).animate({opacity:'1'},1000);
    });
  });
});