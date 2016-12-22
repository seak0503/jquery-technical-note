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
        // デバッグ
        console.log("baseWrapWidth: "+ baseWrapWidth);
        console.log("allLWrapWidth: " + allLWrapWidth);
        //

        findWrap.css({left: -(baseWrapWidth), width: allLWrapWidth, height: imgHeight});
        findWrap.find('ul').css({width: baseWrapWidth, height: imgHeight});

        // ページネーション設定
        var pagination = $('<div class="pagiNation"></div>');
        self.append(pagination);

        findLi.each(function (i) {
          pagination.append('<a href="javascript:void(0);" class="pn' + (i + 1) + '"></a>');
        });

        var pnPoint = pagination.find('a'),
            pnFirst = pagination.find('a:first'),
            pnLast = pagination.find('a:last'),
            pnCount = pagination.find('a').length;

        pnFirst.addClass('pnActive');

        pnPoint.click(function () {
          timerStop();
          var showCont = pnPoint.index(this),
              moveLeft = (imgWidth * showCont) + baseWrapWidth;
          findWrap.stop().animate({left: -(moveLeft)}, slideSpeed, slideEasing);
          pnPoint.removeClass('pnActive');
          $(this).addClass('pnActive');
          activePos();
          timerStart();
        });

        function activePos() {
          var posActive = pagination.find('.pnActive'),
              posIndex = pnPoint.index(posActive);
          findLi.removeClass('mainActive').eq(posIndex).addClass('mainActive');
        }

        // ナビゲーションボタン
        self.append(
          '<a href="javascript:void(0);" class="btnPrev"></a>' +
          '<a href="javascript:void(0);" class="btnNext"></a>'
        )
        var btnNext = self.find('.btnNext'),
            btnPrev = self.find('.btnPrev'),
            posResetNext = -(baseWrapWidth) * 2,
            posResetPrev = -(baseWrapWidth) + (imgWidth);
        //デバッグ
        console.log("posResetNext: " + posResetNext);
        console.log("posResetPrev: " + posResetPrev);
        //

        function sideNavSize() {
          var slideWidth = self.width(),
              btnSize = ($(window).width() - slideWidth) / 2;
          if ($(window).width() > slideWidth) {
            btnNext.css({right: -btnSize, width: btnSize, height: imgHeight});
            btnPrev.css({left: -btnSize, width: btnSize, height: imgHeight});
          }
        }
        sideNavSize();

        $(window).on('resize', function () {
          sideNavSize();
        });

        function slideNext() {
          findWrap.not(':animated').each(function () {
            timerStop();
            var posLeft = parseInt(findWrap.css('left')),
                moveLeft = posLeft - imgWidth;
            findWrap.stop().animate({left: (moveLeft)}, slideSpeed, slideEasing, function () {
              var adjustLeft = parseInt(findWrap.css('left'));
              if (adjustLeft <= posResetNext) {
                findWrap.css({left: -(baseWrapWidth)});
              }
            });

            var setActive = pagination.find('.pnActive'),
                pnIndex = pnPoint.index(setActive),
                listCount = pnIndex + 1;

            if (pnCount == listCount) {
              setActive.removeClass('pnActive');
              pnFirst.addClass('pnActive');
            } else {
              setActive.removeClass('pnActive').next().addClass('pnActive');
            }

            activePos();
            timerStart();
          });
        }

        function slidePrev() {
          findWrap.not(':animated').each(function () {
            timerStop();
            var posLeft = parseInt(findWrap.css('left')),
                moveLeft = posLeft + imgWidth;
            findWrap.stop().animate({left: (moveLeft)}, slideSpeed, slideEasing, function () {
              var adjustLeft = parseInt(findWrap.css('left'));
              if (adjustLeft >= posResetPrev) {
                findWrap.css({left: posResetNext + imgWidth});
              }
            });

            var setActive = pagination.find('.pnActive'),
                pnIndex = pnPoint.index(setActive),
                listCount = pnIndex + 1;
            if (1 == listCount) {
              setActive.removeClass('pnActive');
              pnLast.addClass('pnActive');
            } else {
              setActive.removeClass('pnActive').prev().addClass('pnActive');
            }

            activePos();
            timerStart();
          });
        }

        btnNext.click(function () {
          slideNext();
        });
        btnPrev.click(function () {
          slidePrev();
        });

        function timerStart() {
          slideTimer = setInterval(function () {
            slideNext();
          }, slideDelay);
        }
        timerStart();

        function timerStop() {
          clearInterval(slideTimer);
        }

        self.css({visibility: 'visible', opacity: '0'}).animate({opacity: '1'}, openingFade);
      }
    });
  });
});