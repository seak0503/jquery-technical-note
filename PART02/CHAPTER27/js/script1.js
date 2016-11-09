////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var setElm = $('.slidePanel'),
      slideSpeed = 500;

  setElm.each(function () {
    var self = $(this),
        selfWidth = self.innerWidth(),
        selfUl = self.find('ul'),
        selfLi = selfUl.find('li'),
        listWidth = selfLi.outerWidth(),
        listCount = selfLi.length,
        slideWidth = listWidth * listCount;

    selfUl.css({width: slideWidth});

    if (selfWidth < slideWidth) {
      self.append(
        '<a href="javascript:void(0);" class="btnPrev"></a>' +
        '<a href="javascript:void(0);" class="btnNext"></a>'
      ).
      find('ul').wrapAll('<div class="slideWrap" />');

      var btnNext = self.find('.btnNext'),
          btnPrev = self.find('.btnPrev');

      btnNext.click(function () {
        selfUl.not(':animated').animate({left: '-=' + (listWidth)}, slideSpeed);
      });

      btnPrev.click(function () {
        selfUl.not(':animated').animate({left: '+=' + (listWidth)}, slideSpeed);
      });
    }

  });
});