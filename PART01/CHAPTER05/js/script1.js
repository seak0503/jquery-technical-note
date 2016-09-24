////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  $(window).load(function () {
    var thisTicker = $('.ticker'),
    tickerUl = thisTicker.find('ul'),
    tickerLl = tickerUl.find('li'),
    liFirst = tickerUl.find('li:first');

    liFirst.css({display:'block', opacity:'0', zIndex:'98'})
    .stop()
    .animate({opacity:'1'}, 1000, 'linear')
    .addClass('showlist');

    setInterval(function () {
      var showLi = thisTicker.find('.showlist');
      showLi.animate({opacity:'0'}, 1000, 'linear', function () {
        $(this).next().css({display:'block', opacity:'0', zIndex:'99'})
        .animate({opacity:'1'}, 1000, 'swing')
        .addClass('showlist')
        .end()
        .appendTo(tickerUl)
        .css({display:'none',zIndex:'98'})
        .removeClass('showlist');
      });
    }, 6000);
  });
});