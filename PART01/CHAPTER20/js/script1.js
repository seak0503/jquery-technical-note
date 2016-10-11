////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var setElm = $('.listArea ul li'),
      pdTop = parseInt(setElm.css('padding-top')),
      pdBtm = parseInt(setElm.css('padding-bottom')),
      boxSizing = setElm.css('box-sizing');

  $(window).load(function () {
    h = 0;

    setElm.each(function () {
      var self = $(this),
          hSet = self.outerHeight();

      if (hSet > h) {
        h = hSet;
      }
    });

    if (boxSizing === 'border-box') {
      setElm.css({height:h});
    } else {
      setElm.css({height:(h - (pdTop + pdBtm))});
    }
  });
});