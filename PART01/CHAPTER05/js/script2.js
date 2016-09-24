////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  $(window).load(function () {
    var thisTicker = $('.ticker'),
    tickerUl = thisTicker.find('ul'),
    tickerLl = thisTicker.find('li'),
    liFirst = tickerUl.find('li:first'),
    listHeight = tickerLl.height();

    liFirst.css({top:listHeight, display:'block', opacity:'0', zIndex:'98'})
    .stop()
    .animate({top:'0', opacity: '1'}, 500, 'linear')
    .addClass('showlist');

    setInterval(function () {
      var showLi = thisTicker.find('.showlist');
      showLi.animate({top:-(listHeight), opacity:'0'}, 500, 'linear')
      .next()
      .css({top:listHeight, display:'block', opacity:'0', zIndex:'99'})
      .animate({top:'0', opacity:'1'}, 500, 'linear')
      .addClass('showlist')
      .end()
      .appendTo(tickerUl)
      .css({zIndex:'98'})
      .removeClass('showlist');
    }, 6000);
  });
});