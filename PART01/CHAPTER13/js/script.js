////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var setArea = $('.scrEvent'),
      showHeight = 150;

  setArea.css({display:'block', opacity:'0'})

  $(window).on('load scroll resize', function () {
    setArea.each(function () {
      var setThis = $(this),
          areaTop = setThis.offset().top;

      console.log("デバッグ開始");
      console.log("areaTop = " + areaTop);
      console.log("scrollTop = " + $(window).scrollTop());
      console.log("areaTop + showHeight = " + (areaTop + showHeight));
      console.log("$(windows).height() = " + $(window).height());
      console.log("(areaTop + showHeight) - $(window).height() = " + ((areaTop + showHeight) - $(window).height()) );
      console.log("デバッグ終了");
      console.log("");

      if ($(window).scrollTop() >= (areaTop + showHeight) - $(window).height()) {
        setThis.stop().animate({opacity:'1'}, 500);
      } else {
        setThis.stop().animate({opacity:'0'}, 500);
      }
    });
  });
});