document.body.id = "skrollr-body"
$(window).scroll(
  function(evt){
    if($(window).scrollTop()>0)
    {
      $(".navbar").addClass("bg-light");
      $(".navbar").removeClass("navbar-dark").addClass("navbar-light");
    }
    else
    {
      $(".navbar").removeClass("bg-light");
      $(".navbar").removeClass("navbar-light").addClass("navbar-dark");
    }
      
  }
);

var s = skrollr.init();