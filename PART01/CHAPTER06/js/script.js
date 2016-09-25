////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  $('.required').on('keydown keyup keypress change focus blur', function () {
    $this = $(this);
    if ($this.val() == '') {
      $this.css({backgroundColor: '#ffcccc'});
    } else {
      $this.css({backgroundColor: '#fff'});
    }
  }).change();
});