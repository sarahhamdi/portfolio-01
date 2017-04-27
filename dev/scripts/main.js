$(function(){

var ohHey = "You guys know about vampires? … You know, vampires have no reflections in a mirror? There’s this idea that monsters don’t have reflections in a mirror. And what I’ve always thought isn’t that monsters don’t have reflections in a mirror. It’s that if you want to make a human being into a monster, deny them, at the cultural level, any reflection of themselves. And growing up, I felt like a monster in some ways. I didn’t see myself reflected at all. I was like, \“Yo, is something wrong with me? That the whole society seems to think that people like me don’t exist?\" And part of what inspired me, was this deep desire that before I died, I would make a couple of mirrors. That I would make some mirrors so that kids like me might see themselves reflected back and might not feel so monstrous for it. \n \n-- Junot Diaz";
var scrollTop = 0;

console.log('%c' + ohHey, 'background: #ff294c; color: white; font-size: 18px;');

// smooth scroll or internal links
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	

// smooth scroll or internal links
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 30) {
      $('.nav').addClass('nav__box-shadow');
    } else if (scrollTop < 30) {
      $('.nav').removeClass('nav__box-shadow');
    } 
    
  }); 

});