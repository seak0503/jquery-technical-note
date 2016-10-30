////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var cutElm = $('p'),
      cutCount = 100,
      openTxt = '… 続きを見る',
      closeTxt = '[×] 閉じる';

  cutElm.each(function () {
    var self = $(this),
        selfText = self.text(),
        textLength = selfText.length,
        textTrim = selfText.substr(0, cutCount);

    function textTrimming() {
      self.html(
        textTrim +
        '<a href="javascript:void(0);" class="textOpen">' +
          openTxt +
        '</a>'
      ).css({visibility: 'visible'});

      self.find('.textOpen').on('click', function () {
        self.html(selfText).append(
          '<a href="javascript:void(0);" class="textClose">' +
            closeTxt +
          '</a>'
        );

        self.find('.textClose').on('click', function () {
          textTrimming();
        });
      });
    }

    if (cutCount < textLength) {
      textTrimming();
    } else {
      self.css({visibility: 'visible'});
    }
  });
});