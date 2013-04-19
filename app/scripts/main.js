function random (max) {
  return Math.floor(Math.random() * (max + 1));
}

function prepare(element,count){
  var buffer = '';
  var characters = element.html().split('');
  for (var i = 0; i < characters.length; i++) {
    if (characters[i] === '<'){
      buffer += characters.slice(i, $.inArray('>', characters, i) + 1).join('');
      i = $.inArray('>', characters, i);
    } else buffer += '<span class="fade' + random(count) + '">' + characters[i]+ '</span>';
  }
  $(element).html(buffer);
}

function fade(count, element, opacity, callback) {
  $('.fade' + count).fadeTo(3000, opacity);
  if (count-- !== 0) {
    window.setTimeout(function(){
      fade(count, element, opacity, callback);
    }, 300);
  } else {
    if(typeof callback === 'function') window.setTimeout(callback, 3300);
  }
}

$(document).ready(function() {
  var $quote =  $('.quote');
  var $author =  $('.author');
  prepare($quote, 8);
  prepare($author, 8);
  window.setTimeout(function(){
    fade(8,$('.quote'),0.0,function(){
      $quote.addClass('opaque').html('My name is Colin Wren and I\'m a full stack JavaScript developer, designer, and open source software enthusiast located in the San Francisco Bay Area. Currently, I\'m working on open source projects full time and seeking the perfect web development position.');
      $author.addClass('opaque').html('If you\'d like to get in touch, you can reach me through my <a href="mailto:colin@cawren.com" class="contact">Email</a>, <a href="https://github.com/colinwren" class="contact">GitHub</a>, or <a href="https://twitter.com/colinwrenca" class="contact">Twitter</a>.');
      prepare($quote, 8);
      prepare($author, 8);
      fade(8, $quote, 1.0);
    });
  }, 4700);
});
