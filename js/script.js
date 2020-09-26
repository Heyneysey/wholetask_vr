$(function() {

  $('a').click(function(e) {

    e.preventDefault();
    var url = $(this).attr('href');

    $('.scene_element').addClass('scene_element_leave');
    $('.scene_element_img').addClass('scene_element_img_leave');
    $('.scene_element_img_2').addClass('scene_element_img_2_leave');
    $('.scene_element_roll').addClass('scene_element_roll_leave');

    var time = $('.scene_element_leave').css('animation-duration');

    setTimeout(function() {
      window.location.href = url;
    }, 2000);
  });

  $(".image_previews").click(function() {

    $("#image").fadeTo(1000, 0.30, function() {
      $("#image").attr("src", $("#link").attr("href"));
    }).fadeTo(500, 1);
    return false;
  });
});