////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  $('body').prepend(
    '<div id="fullScreen">' +
    '<img src="img/photo1.jpg">' +
    '<img src="img/photo2.jpg">' +
    '<img src="img/photo3.jpg">' +
    '<img src="img/photo4.jpg">' +
    '<img src="img/photo5.jpg">' +
    '</div>'
  );

  $(window).load(function () {
    var setFull = $('#fullScreen'),
        fullImg = setFull.children('img'),
        fadeSpeed = 1000,
        switchDelay = 5000;

        imgRatio = fullImg.width() / fullImg.height();

    function imgFit() {
      var wdWidth = $(window).width(),
          wdHeight = $(window).height(),
          setHeight =wdWidth / imgRatio;

      if (setHeight < wdHeight) {
        setHeight = $(window).height();
        wdWidth = setHeight * imgRatio;
      }
      setFull.css({height: wdHeight});
      fullImg.css({
        marginTop: -setHeight / 2,
        marginLeft: -wdWidth / 2,
        width: wdWidth,
        height: setHeight
      });
    }

    $(window).on('resize', function () {
      imgFit();
    });
    imgFit();

    fullImg.css({visibility: 'visible', opacity: '0'}).first().animate({opacity: '1'}, fadeSpeed);

    setInterval(function () {
      var firstImg = setFull.find('img:first');
      firstImg.animate({opacity: '0'}, fadeSpeed).next().animate({opacity: '1'}, fadeSpeed).end().appendTo(setFull);
    }, switchDelay);
  });
});