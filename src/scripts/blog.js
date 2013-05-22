function fadePosts (posts) {
  $(posts[0]).animate({opacity:1}, 1300);
  posts.shift();
  if (posts.length) {
    setTimeout(function() {
      fadePosts(posts);
    }, 350);
  }
}

$(document).ready(function() {
  $('abbr.timeago').timeago();
  var posts = $('.post');
  fadePosts($.makeArray(posts));
});

