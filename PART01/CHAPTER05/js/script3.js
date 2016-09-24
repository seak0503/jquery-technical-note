////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  $(window).load(function () {
    var thisTicker = $('.ticker'),
    tickerUl = thisTicker.find('ul'),
    tickerLl = tickerUl.find('li'),
    liFirst = tickerUl.find('li:first'),
    ulWidth = tickerUl.width();

    liFirst.css({left:ulWidth, display:'block', opacity:'0', zIndex:'98'})
    .stop()
    .animate({left:'0', opacity:'1'}, 1000, 'linear')
    .addClass('showlist');

    setInterval(function () {
      var showLi = thisTicker.find('.showlist');

      showLi.animate({left:-(ulWidth), opacity:'0'}, 1000, 'linear')
      .next()
      .css({left:ulWidth, display:'block', opacity:'0', zIndex:'99'})
      .animate({left:'0', opacity:'1'}, 1000, 'linear')
      .addClass('showlist')
      .end()
      .appendTo(tickerUl)
      .css({zIndex:'98'})
      .removeClass('showlist');
    }, 6000);
  });
});