$(document).ready(function() {

  $('.circle-nav__item a').hover(function(){
    $(this).siblings('.tooltip').toggleClass('is_open');
  });
  
});