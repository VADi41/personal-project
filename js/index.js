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

/*$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('fadeIn');
    $('nav-item').addClass('fadeIn');
  }
  else{
    $('nav').removeClass('fadeIn');
    $('nav-item').addClass('fadeIn');
  }
})*/

(function($) {
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
})(jQuery);

$("section").each(function() {

   new ScrollMagic.Scene({
       triggerElement: this
   })
   .setPin(this)
   .addTo(ctrl);

});
