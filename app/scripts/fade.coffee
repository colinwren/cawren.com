random =  (max) ->
  Math.floor(Math.random() * (max + 1))

prepare = (element,count) ->
  buffer = ''
  characters = element.html().split('')
  for character, i in characters
    if character is '<'
      buffer += characters.slice(i, $.inArray('>', characters, i) + 1).join('')
      i = $.inArray('>', characters, i)
    else buffer += '<span class="fade' + random(count) + '">' + character+ '</span>'
  $(element).html(buffer)

fade = (count, element, opacity, callback) ->
  $('.fade' + count).fadeTo(3000, opacity)
  unless count--  is 0
    window.setTimeout( ->
      fade(count, element, opacity, callback)
    , 300)
  else if typeof callback is 'function'
    window.setTimeout(callback, 3300)

$(document).ready( ->
  $quote =  $('.quote')
  $author =  $('.author')
  prepare($quote, 8)
  prepare($author, 8)
  window.setTimeout( ->
    fade(8, $('.quote'), 0.0, ->
      $quote.addClass('opaque').html('My name is Colin Wren and I\'m a front-end developer and open source software enthusiast located in the San Francisco Bay Area. Currently, I\'m working on open source projects full time and seeking the perfect web development position.')
      $author.addClass('opaque').html('If you\'d like to get in touch, you can reach me through my <a href="mailto:colin@cawren.com" class="contact">Email</a>, <a href="https://github.com/colinwren" class="contact">GitHub</a>, or <a href="https://twitter.com/colinwrenca" class="contact">Twitter</a>.')
      prepare($quote, 8)
      prepare($author, 8)
      fade(8, $quote, 1.0)
    )
  , 4700)
)
