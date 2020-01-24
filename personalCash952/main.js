if ($(window).width() < 775) {
    $('#fix').removeClass('fix');
    $('#fix').removeClass('fixed-top');
 }
 else {
    $('#fix').addClass('fix');
    $('#fix').addClass('fixed-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#fix').removeClass('fix');
            $('#fix').addClass('fix1');
        } else {
            $('#fix').addClass('fix');
            $('#fix').removeClass('fix1');
        }
      });
 }
