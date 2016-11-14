////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var setElm = $('.loopSlider'),
      slideSpeed = 2000;

  setElm.each(function () {
    var self = $(this),
        selfWidth = self.innerWidth(),
        findUl = self.find('ul'),
        findLi = self.find('li'),
        listWidth = findLi.outerWidth(),
        listCount = findLi.length,
        loopWidth = listWidth * listCount;
    /////
    // debug
    console.log("デバッグselfWidth: " + selfWidth);
    console.log("デバッグlistWidth: " + listWidth);
    console.log("デバッグlistCount: " + listCount);
    console.log("デバッグloopWidth: " + loopWidth);

    findUl.wrapAll('<div class="loopSliderWrap" />');
    var selfWrap = self.find('.loopSliderWrap');

    if (loopWidth > selfWidth) {
      findUl.css({width: loopWidth}).clone().appendTo(selfWrap);

      selfWrap.css({width: loopWidth * 2});

      function loopMove() {
        selfWrap.animate({left: '-' + (loopWidth) + 'px'}, slideSpeed * listCount, 'linear', function () {
          selfWrap.css({left: '0'});
          loopMove();
        });
      }
      loopMove();
    }
  });
});