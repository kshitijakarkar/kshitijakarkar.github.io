$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

      if (this.hash !== "") {
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});