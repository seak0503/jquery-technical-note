////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var setElm = $('.slider'),
      slideSpeed = 500,
      slideDelay = 5000,
      slideEasing = 'linear',
      openingFade = 1000;

  $(window).load(function () {
    setElm.each(function () {
      var self = $(this),
          findUl = self.find('ul'),
          findLi = findUl.find('li'),
          findLiCount = findLi.length,
          findImg = findLi.find('img'),
          slideTimer;

      findLi.each(function (i) {
        $(this).attr('class', 'viewList' + (i + 1));
      });

      if (findLiCount > 1) {
        self.wrapAll('<div class="sliderCover" />');
        findUl.wrapAll('<div class="sliderWrap" />');

        var findCover = self.parent('.sliderCover'),
            findWrap = self.find('.sliderWrap');

        findUl.clone().prependTo(findWrap);
        findUl.clone().appendTo(findWrap);

        findWrap.find('ul').eq('1').addClass('mainList');

        var mainList = findWrap.find('.mainList').find('li');
        mainList.eq('0').addClass('mainActive');

        var allList = findWrap.find('li'),
            allListCount = allList.length;

        // スライダーエリアの高さ設定
        var imgWidth = findImg.width(),
            imgHeight = findImg.height();

        self.css({height: imgHeight});
        findCover.css({height: imgHeight});
        allList.css({height: imgHeight});

        var baseWrapWidth = imgWidth * findLiCount,
            allLWrapWidth = imgWidth * allListCount;

        findWrap.css({left: -(baseWrapWidth), width: allLWrapWidth, height: imgHeight});
        findWrap.find('ul').css({width: baseWrapWidth, height: imgHeight});
      }
    });
  });
});