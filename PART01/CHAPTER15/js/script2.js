////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  var maxNum = 5,
      rdm = Math.floor(Math.random() * maxNum) + 1;
  $('#randomShow').addClass('setView' + rdm);
});