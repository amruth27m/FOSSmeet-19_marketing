 $(document).ready(function(){
          // Add smooth scrolling to all links
          $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();

              // Store hash
              var hash = this.hash;

              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
          });
        });

$(document).ready(function () {

// Hide/show animation hamburger function
$('.navbar-toggler').on('click', function () {

// Take this line to first hamburger animations
$('.animated-icon1').toggleClass('open');

// Take this line to second hamburger animation
$('.animated-icon3').toggleClass('open');

// Take this line to third hamburger animation
$('.animated-icon4').toggleClass('open');
});

});

$(document).ready(function () {
var multiple = new Multiple({
  selector: '.item',
  background: 'linear-gradient(#273463, #8B4256)'
});
    });