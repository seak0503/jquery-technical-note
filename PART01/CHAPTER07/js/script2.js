////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var countThis = $('.inputCount'),
      countMax = 120;

  countThis.find('.count').text(countMax);

  countThis.find('textarea').on('keydown keyup keypress change', function () {
    var thisValueLength = $(this).val().length,
        countDown = countMax - thisValueLength;
    countThis.find('.count').text(countDown);

    if (countDown < 0) {
      countThis.find('.count').addClass('countBelow');
    } else {
      countThis.find('.count').removeClass('countBelow');
    }
  });
});