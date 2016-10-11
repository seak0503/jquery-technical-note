////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function(){
  var setElm = $('.listArea ul'),
  setChild = setElm.find('li'),
  chdLength = setChild.length,
  pdTop = parseInt(setChild.css('padding-top')),
  pdBtm = parseInt(setChild.css('padding-bottom')),
  boxSizing = setChild.css('box-sizing');

  function setHeight(){
    h = 0;

    prtWidth = setElm.outerWidth();
    chdWidth = setChild.outerWidth();
    setNum = Math.floor(prtWidth / chdWidth);

    setChild.css({height:'auto'}).each(function(i){
      var self = $(this),
      hSet = self.outerHeight(),
      i = i+1;

      self.addClass('heightReplace');

      if(hSet > h){
        h = hSet;
      }

      if(boxSizing === 'border-box'){
        setElm.find('.heightReplace').css({height:h});
      } else {
        setElm.find('.heightReplace').css({height:(h-(pdTop + pdBtm))});
      }

      if(i%setNum == 0 || i == chdLength){
        h = 0;
        setChild.removeClass('heightReplace');
      }
    });
  }

  $(window).on('load resize',function(){
    setHeight();
  });
});
