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


(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
