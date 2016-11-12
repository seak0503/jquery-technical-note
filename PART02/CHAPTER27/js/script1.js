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
        selfUl.not(':animated').animate({left: '-=' + (listWidth)}, slideSpeed, function () {
          btnSet();
        });
      });

      btnPrev.click(function () {
        selfUl.not(':animated').animate({left: '+=' + (listWidth)}, slideSpeed, function () {
          btnSet();
        });
      });

      function btnSet() {
        var ulLeft = parseInt(selfUl.css('left')),
            maskWidth = selfWidth - slideWidth;

        if (ulLeft == 0) {
          btnNext.css({display: 'block'});
          btnPrev.css({display: 'none'});
        } else if (ulLeft <= maskWidth) {
          btnNext.css({display: 'none'});
          btnPrev.css({display: 'block'});
        } else {
          btnNext.css({display: 'block'});
          btnPrev.css({display: 'block'});
        }
      }
      btnSet();
    }
  });
});