////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var setElm = $('.slider'),
      slideSpeed = 500,
      slideDelay = 5000,
      slideEasing = 'linear',
      slideMaxWidth = 800,
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

        // スライダーエリアのレスポンシブ設定
        function setSlideSize() {
          var wdWidth = $(window).width();
          console.log('wdWidth: ' + wdWidth);

          if (slideMaxWidth >= wdWidth || slideMaxWidth == 0) {
            allList.css({width: wdWidth});
          } else if (slideMaxWidth < wdWidth) {
            allList.css({width: slideMaxWidth});
          }

          imgWidth = findImg.width();
          imgHeight = findImg.height();

          self.css({height: imgHeight});
          findCover.css({height: imgHeight});
          allList.css({height: imgHeight});

          baseWrapWidth = imgWidth * findLiCount;
          allLWrapWidth = imgWidth * allListCount;

          findWrap.css({width: allLWrapWidth, height: imgHeight})
          .find('ul').css({width: baseWrapWidth, height: imgHeight});

          posResetNext = -(baseWrapWidth) * 2;
          posResetPrev = -(baseWrapWidth) + (imgWidth);
        }
        setSlideSize();
      }
    });
  });
});