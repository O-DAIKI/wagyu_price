$(function(){
  // '[ 属性 ^= "値" ]' href属性が"#"で始まる要素を取得
  $('a[href^="#"]').click(function(){
    var href = $(this).attr("href");
    var target = $(href === "#" || href === "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop: position}, 500, "swing");
    return false;
  });
});