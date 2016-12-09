////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var setElm = $('.slideShow'),
      fadeSpeed = 1000;

  $(window).load(function () {
    setElm.each(function () {
      var self = $(this),
          findUl = self.find('ul'),
          findLi = findUl.find('li'),
          findLiFirst = findUl.find('li:first'),
          findLiCount = findLi.length,
          findImg = findLi.find('img');

      findLi.css({display: 'block', opacity: '0', zIndex: '99'});

      function areaHeight() {
        var imgHeight = findImg.height();

        self.css({height: imgHeight});
        findUl.css({height: imgHeight});
        findLi.css({height: imgHeight});
      }
      $(window).on('resize', function () {
        areaHeight();
      })
      areaHeight();
    })
  })
})