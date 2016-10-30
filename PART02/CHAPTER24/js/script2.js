////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var rwdMenu = $('#globalMenu'),
      switchPoint = 768,
      slideSpeed = 300,
      fadeSpeed = 500;

  var menuSouce = rwdMenu.html();

  $(window).load(function () {

    function menuSet() {
      if (window.innerWidth < switchPoint) {
        if (!($('#rwdMenuWrap').length)) {
          $('body').prepend(
            '<div id="menuOverlay"></div>' +
            '<div id="switchBtnArea">' +
              '<a href="javascript:void(0);" id="switchBtn"></a>' +
            '</div>' +
            '<div id="rwdMenuWrap"></div>'
          )
          $('#rwdMenuWrap').append(menuSouce);

          var menuOverlay = $('#menuOverlay'),
              switchBtn = $('#switchBtn'),
              btnLeft =  parseInt(switchBtn.css('left')),
              menuWrap = $('#rwdMenuWrap'),
              menuWidth = menuWrap.outerWidth();

          switchBtn.on('click', function () {
            if ($(this).hasClass('btnClose')) {

            } else {
              $(this).addClass('btnClose').css({position:'fixed'}).stop().animate({left:menuWidth + btnLeft},slideSpeed);
              menuOverlay.css({display: 'block', opacity: '0'}).stop().animate({opacity:'1'}, fadeSpeed);
              menuWrap.stop().animate({left: '0'}, slideSpeed);
              $('body').css({position: 'fixed'});
            }
          });
        }
      } else {}
    }

    $(window).on('resize', function () {
      menuSet();
    });

    menuSet();
  });
});