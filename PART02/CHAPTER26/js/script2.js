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
  })

})