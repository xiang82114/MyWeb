// $(".app").click(
//   function(){
//     window.scrollTo(0,0);
//   }
// );

$(function() {
  var $win = $(window);
  var $backToTop = $(".appicon");
  // 当用户滚动到离顶部100像素时，展示回到顶部按钮
  $win.scroll(function() {
    if ($win.scrollTop() > 100) {
      $backToTop.show();
    } else {
      $backToTop.hide();
    }
  });
  // 当用户点击按钮时，通过动画效果返回头部
  $backToTop.click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 200);
  });
});