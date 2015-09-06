$(document).ready(function() {

  $('.circle-nav__item a').hover(function(){
    $(this).siblings('.tooltip').toggleClass('is_open');
  });

  $('.circle-nav__item').hide();
  $('.circle-nav__item').each(function(i) {
    setTimeout(function() {
      $('.circle-nav__item').eq(i).show().addClass('bounceIn');
    }, 200 * i);
  });

});
