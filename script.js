var 
  nowtime=57;
var hr = $(".hr").text();
var date = 0;

var mute = false;
var speakerphone = false;
var showdayweather = false;

var button_audio=new Audio("https://monoame.com/awi_class/ballsound/click14.wav");

var screen_audio=new Audio("https://monoame.com/awi_class/ballsound/click18.wav");

var take_a_picture_audio=new Audio("https://xiang82114.github.io/MyWeb/media/camera.mp3");

var message_audio=new Audio("https://xiang82114.github.io/MyWeb/media/message.mp3");

var phone_audio=new Audio("https://xiang82114.github.io/MyWeb/media/phone.mp3");

var home_audio=new Audio("https://monoame.com/awi_class/ballsound/click23.wav");

var wiggle_audio=new Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3");

//button_audio.play();
function PrefixInteger(num, length) {
 return (Array(length).join('0') + num).slice(-length);
}  
setInterval(
  function(){  
    nowtime+=1;    
    $(".hr").text(PrefixInteger(hr,2));
    if(nowtime<10){
      $(".st_time").text(hr+":0"+nowtime+" AM");
      $(".st_min").text("0"+nowtime);
    }else{
      $(".st_time").text(hr+":"+nowtime+" AM");
      $(".st_min").text(nowtime);
    }
    if (nowtime % 3 ==0)
    {
      $(".tel_status").text("撥號中.  "); 
    }else if (nowtime % 3 ==1)
    {
      $(".tel_status").text("撥號中.. "); 
    }else if (nowtime % 3 ==2)
    {
      $(".tel_status").text("撥號中..."); 
    } 
    if(nowtime==59){      
      nowtime=-1;
      $('.numicon').removeClass('hide');
      playSound();
      hr++;     
    }
    if(hr==24){
      hr=0;
      date++;
    }
  } 
,1000);

function playSound() {
  message_audio.play();
}

$(".app8").click(
  function(){
    // $(".rainbow").css("animation","");
    // $(".rainbow").css("animation","ShowRainbow 2s");
    // $(".rainbow").addClass("rainbow_play");
    $(".page1").css("left","-100%");
    $(".page2").css("left","0%");
    $(".page3").css("left","100%");
    screen_audio.play(); 
//     setTimeout(function () { 
//     // $('.rainbow').removeClass('rainbow_play');
//     $(".screen").removeClass("lighten");
// }, 2000);
});

$(".house").click(
  function(){
    $(".page1").css("left","0%");
    $(".page2").css("left","100%");
    $(".page3").css("left","200%");
    home_audio.play(); 
});

$(".return").click(
  function(){
    $(".page1").css("left","0%");
    $(".page2").css("left","100%");
    $(".page3").css("left","200%");
    home_audio.play(); 
});

$(".endcall").click(
  function(){
    $(".page1").css("left","0%");
    $(".page2").css("left","100%");
    $(".page3").css("left","200%");
    $(".page3").css("top","100%");
    home_audio.play(); 
});


$(".camera_btn").click(
  function(){
    $(".screen").addClass("lighten");
    
    take_a_picture_audio.play(); 
    setTimeout(function () { 
    $(".screen").removeClass("lighten");
    $(".photo").addClass("hasphoto");
}, 1000);    
    setTimeout(function () { 
    $(".photo").removeClass("hasphoto");
}, 7000);
});
$(".phonebtn").click(function(){
  $(".page1").css("left","-100%");
  $(".page2").css("left","100%");
  $(".page3").css("left","0%");
  $(".page3").css("top","0%");
  home_audio.play(); 
});

$(".shake").click(function(){
  wiggletime=0;
  wiggle_audio.play();
});
var wiggletime=21;
setInterval(function(){
  if(wiggletime<=20){
    wiggletime+=1;       
    if(wiggletime%2==0){
      $(".phone").css("left","49%");
    }else{
      $(".phone").css("left","51%");
    }
    if(wiggletime==21){
      $(".phone").css("left","50%");
    }
  }   
},60);

$(".mute").click(
  function(){
    if(mute==false){
      $(this).css("color","white");
      mute=true;
    }else{
      $(this).css("color","#333");
      mute=false;
    }

});
$(".speakerphone").click(
  function(){
    if(mute==false){
      $(this).css("color","white");
      mute=true;
      phone_audio.play();
    }else{
      $(this).css("color","#333");
      mute=false;
      phone_audio.pause();
      phone_audio.currentTime = 0;
    }
});
$(".weatherbox").click(
  function(){    
    // $(".weatherbox2").toggle(1000);
    // $(".weatherbox2").slideToggle(3000);
    if(showdayweather==false){
      $(".weatherbox2").css("z-index","12");
      $(".weatherbox2").css("top","43%");
      showdayweather=true;
    }else{
      $(".weatherbox2").css("z-index","-1");
      $(".weatherbox2").css("top","28%");
      showdayweather=false;
    }
    
});


$(".app5").click(
  function(){    
    $('.numicon').addClass('hide');
    message_audio.play();
});