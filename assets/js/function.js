$(document).ready(function() {

  // circle-nav functions
  $('.circle-nav__item a').hover(function(){
    $(this).siblings('.tooltip').toggleClass('is_open');
  });

  $('.circle-nav__item').hide();
  $('.circle-nav__item').each(function(i) {
    setTimeout(function() {
      $('.circle-nav__item').eq(i).show().addClass('bounceIn');
    }, 200 * i);
  });

  // timeline-nav functions
  $('.timeline-nav__item').hide();
  $('.timeline-nav__item').each(function(i) {
    setTimeout(function() {
      $('.timeline-nav__item').eq(i).show().addClass('bounceIn');
    }, 200 * i);
    setTimeout(function() {
      $('.bubble').first().addClass('is_open')
    }, 1200);
  });

  $('.timeline-nav__item a').on('click', function() {
    event.preventDefault();

    $('.timeline-nav__item').find('.bubble').removeClass('is_open');

    $(this).next().addClass('is_open');
  });

});
