////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function () {
  $('body').animate({opacity:'1'}, 1000);

  $('a').click(function (e) {
    e.preventDefault();

    var selfPass = $(this).attr('href');
    $('body').animate({opacity:'0'}, 1000, function () {
      location.href = selfPass;
      setTimeout(function () {
        $('body').animate({opacity:'1'})
      }, 1000);
    });
  });
});