$(document).ready(function() {

  // circle-nav functions
  $('.circle-nav__item a').hover(function(){
    $('.circle-nav__item').find('.is_open').removeClass('is_open');
    $(this).siblings('.tooltip').toggleClass('is_open');
  });

  $('.circle-nav__item').hide();
  $('.circle-nav__item').each(function(i) {
    setTimeout(function() {
      $('.circle-nav__item').eq(i).show().addClass('bounceIn');
    }, 200 * i);
    setTimeout(function() {
      $('.tooltip').first().addClass('is_open')
    }, 1200);
  });


  // timeline-nav functions
  $('.timeline-nav__item').hide();
  $('.timeline-nav__item').each(function(i) {
    setTimeout(function() {
      $('.timeline-nav__item').eq(i).show().addClass('bounceIn');
    }, 200 * i);
    setTimeout(function() {
      $('.bubble').first().toggleClass('is_open')
    }, 1200);
  });

  $('.timeline-nav__item a').on('click', function() {
    event.preventDefault();

    $('.timeline-nav__item').find('.bubble').removeClass('is_open');

    $(this).next().addClass('is_open');
  });

// circle-nav-grid functions


  $('.nav_item').hide();
  $('.nav_item').each(function(i) {
    setTimeout(function() {
      $('.nav_item').eq(i).show().addClass('bounceIn');
    }, 200 * i);
    if($(window).width() > 768) {
      setTimeout(function() {
        $('.pop').first().addClass('is_open')
      }, 1200);
    };
  });

  $('.nav_item a').hover(function(){
    $('.nav_item').find('.is_open').removeClass('is_open');
    $(this).siblings('.pop').toggleClass('is_open');
  });


});
