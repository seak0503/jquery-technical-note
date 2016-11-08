////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var setArea = $('#imgLoad'),
      imgPass = 'img/photo',
      imgType = '.jpg',
      linkPass = 'img/large/photo',
      linkType = '.jpg',
      loadNum = 5,
      maxNum = 25,
      fadeSpeed = 1000,
      btnTxt = 'もっと見る';

  setArea.append(
    '<div id="loadArea"></div>' +
    '<a href="javascript:void(0);" id="moreBtn">' +
      btnTxt +
    '</a>'
  );

  var loadArea = setArea.find('#loadArea'),
      moreBtn = setArea.find('#moreBtn');

  moreBtn.click(function () {
    var loadImg = loadArea.find('img'),
        imgLength = loadImg.length,
        loopCont = imgLength + loadNum;

    if (loopCont < maxNum) {
      $.each(new Array(loadNum), function (i) {
        loadArea.append(
          '<a href="' + linkPass + (imgLength + (i + 1)) + linkType + '" target="_blank" class="modalBtn">' +
            '<img src="' + imgPass + (imgLength + (i + 1)) + imgType + '">' +
          '</a>'
        );
      });
    } else if(loopCont >= maxNum){
      var overCont = maxNum - imgLength;

      $.each(new Array(overCont), function (i) {
        loadArea.append(
          '<a href="' + linkPass + (imgLength + (i + 1)) + linkType + '" target="_blank" class="modalBtn">' +
            '<img src="' + imgPass + (imgLength + (i + 1)) + imgType + '">' +
          '</a>'
        );
      });

      moreBtn.remove();
    }

    loadArea.find('img').on('load', function () {
      $(this).animate({opacity: '1'}, fadeSpeed);
    });

    var mdwBtn = $('.modalBtn'),
        overlayOpacity = 0.7,
        fadeTime = 500;

    mdwBtn.on('click', function (e) {
      e.preventDefault();

      var setMdw = $(this),
          setHref = setMdw.attr('href'),
          wdHeight = $(window).height();
      $('body').append(
        '<div id="mdOverlay"></div>' +
        '<div id="mdWindow">' +
          '<div class="mdClose">×</div>' +
          '<img src="' + setHref + '">' +
        '</div>'
      );

      $('#mdOverlay, #mdWindow').css({display:'block', opacity:'0'});
      $('#mdOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity}, fadeTime);
      $('#mdWindow').stop().animate({opacity:'1'}, fadeTime);

      $(window).on('resize', function () {
        var adjHeight = $(window).height();
        $('#mdOverlay').css({height:adjHeight});
      });

      $('#mdOverlay, .mdClose').on('click', function () {
        $('#mdWindow, #mdOverlay').stop().animate({opacity:'0'}, fadeTime, function () {
          $('#mdOverlay, #mdWindow').remove();
        });
      });
    });
  });
});