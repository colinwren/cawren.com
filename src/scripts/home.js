$(document).ready(function() {
    var $toDissolve = $('.quote, .author');
    window.setTimeout(function() {
      $toDissolve.dissolve({}, function() {

        $('.quote')
          .addClass('opaque')
          .html('My name is Colin Wren and I\'m a full stack JavaScript developer, designer, and open source software enthusiast located in the San Francisco Bay Area.');

        $('.author')
          .addClass('opaque')
          .html('If you\'d like to get in touch, you can reach me through my <a href="mailto:colin@cawren.com" class="contact">Email</a>, <a href="https://github.com/colinwren" class="contact">GitHub</a>, or <a href="https://twitter.com/colinwrenca" class="contact">Twitter</a>.');

        $toDissolve.dissolve({ opacity: 1 },function() {
        });
      });
    }, 5000);
});
