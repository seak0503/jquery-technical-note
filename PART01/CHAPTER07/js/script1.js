////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var countThis = $('.inputCount');
  countThis.find('textarea').on('keydown keyup keypress change', function () {
    var thisValueLength = $(this).val().length;
    countThis.find('.count').text(thisValueLength);
  });
});