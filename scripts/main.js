window.setTimeout(function(){
  $('.fade1').dissolve({
    fadeTime: 2400
  }, function(){
    $(this).hide()
    $('.fade2')
      .show()
      .dissolve({
        opacity: 1
      })
  })
}, 5800)
