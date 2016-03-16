$('.mainNav a').click(
  function(){
    $('.hidden').fadeOut(500);
    $( $(this).attr('href') ).fadeIn(750);
  }
)

$('.order img').click(
  function(){
    var theImage = $(this).attr('src');
    var theSection = $(this).parent().attr('id');

    $("#" + theSection).find(".active").removeClass('active');
    $("#" + theSection).addClass('selected');
    $(this).addClass('active');

    $('#order_' + theSection).attr('src', theImage);
  }
)

$('.btn-close').click(
  function(){
    $(this).closest('.content-box').fadeOut(500);
  }
)
