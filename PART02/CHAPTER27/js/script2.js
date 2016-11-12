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
        slideWidth = listWidth * listCount,
        moveCount = Math.round(selfWidth / listWidth),
        wrapSplit = Math.ceil(listCount / moveCount);

    selfUl.css({width: slideWidth});

    if (selfWidth < slideWidth) {
      self.append(
        '<a href="javascript:void(0);" class="btnPrev"></a>' +
        '<a href="javascript:void(0);" class="btnNext"></a>' +
        '<div class="pagiNation"></div>'
      ).find('ul').wrapAll('<div class="slideWrap" />');
    }

  })
})