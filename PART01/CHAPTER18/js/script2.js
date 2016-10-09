////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var setElm = $('.delayLoad > ul > li'),
      delayTime = 100;

  $(window).load(function () {
    function randomShow() {
      var elmLength = setElm.length,
          randomSet = Math.floor(Math.random() * elmLength);

      $(setElm[randomSet]).css({visibility:'visible', opacity:'0'}).animate({opacity:'1'}, 1000);
      setElm.splice(randomSet,1);

      if (elmLength > 0) {
        setTimeout(function () {
          randomShow();
        }, delayTime);
      } else {
        return false;
      }
    }

    randomShow();
  });
});