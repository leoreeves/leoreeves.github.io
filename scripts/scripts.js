// Hide/Show navbar on scroll
$(window).scroll(function() {
  var scrollPos = $('body').scrollTop();
  if (scrollPos > 0) {
    $(".navbar").css("background", "#344152");
  } else {
    $(".navbar").css("background", "transparent");
    $(".navbar-default").css("background-color", "transparent !important");
  }
});

// Fade scroll
$(window).scroll(function() {
  $("#main").css("opacity", 1 - $(window).scrollTop() / 500);
});

// Smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(".btn").mouseup(function(){
    $(this).blur();
})