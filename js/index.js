$('.nav-item[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
$('.navbar-brand[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
$(window).on('scroll', function(){
  if($(window).scrollTop()>200){
    $('nav').addClass('fadeIn');
    $('.nav-item').addClass('fadeIn');
    $('.navbar-brand').addClass('fadeIn');
  }
  else{
    $('nav').removeClass('fadeIn');
    $('.nav-item').removeClass('fadeIn');
    $('.navbar-brand').removeClass('fadeIn');
  }
})
var $progressAnim = $('#about-me');
$progressAnim.waypoint(function(){
  $('.progress-html').addClass('anim');
  $('.progress-css').addClass('anim');
  $('.progress-js').addClass('anim');
}, {offset:'50%'})
