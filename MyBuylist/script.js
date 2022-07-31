var
itemurl="https://awiclass.monoame.com/api/command.php?type=get&name=itemdata";

var shop_list={};
shop_list.name="MyBuylist 購物清單";
shop_list.time="2022/5/28";
shop_list.list=[
  {name:"吹風機",price:  300},
  {name:"麥克風",price:  9000},
  {name:"筆記型電腦",price:  54555},
  {name:"Iphone 9",price:  32000},
  {name:"神奇海螺",price:  5000}
];

$.ajax(
  {
    url: itemurl,
    success: function(res){
      // console.log(JSON.parse(res));
      shop_list.list=JSON.parse(res);
      showlist();
    }    
  }
);


var item_html="<li id={{id}} class='buy_item'><p> {{num}}.{{name}}</p><div class='price'>{{price}}</div><div id={{del_id}} data-delid={{del_item_id}} class='del_btn'>X</div></li>";

var total_html="<li class='buy_item_add total'>總價<div class='price'>{{price}} $</div></li>";

function showlist(){
  $("#buy_items").html("");
  var total_price=0;
  for(var i=0;i<shop_list.list.length;i++)
  {
    var item=shop_list.list[i];
    var item_id="buyitem_"+i;
    var del_item_id="del_buyitem_"+i;
    total_price+=parseInt(item.price); /*轉換成數字才不會當成文字(因為val預設都是字)*/
    var current_item_html=item_html.replace("{{num}}",i+1)
                                   .replace("{{name}}",item.name)
                                   .replace("{{id}}",item_id)
                                   .replace("{{del_id}}",del_item_id)
                                   .replace("{{price}}",item.price)
                                   .replace("{{del_item_id}}",i)
    ;

    $("#buy_items").append(current_item_html);
    $("#"+del_item_id).click(
      function(){
        var buyitem_name = "#buyitem_"+parseInt($(this).attr("data-delid"));
        $(buyitem_name).css("animation","drop 2s both"); 
        var data_id = parseInt($(this).attr("data-delid"));
        console.log(data_id);
        setTimeout(function () { 
          remove_item(data_id,1);
        }, 2000);
      }
    );
  }
  var current_total_html=total_html.replace("{{price}}",total_price);
  $("#buy_items").append(current_total_html);
}
showlist();
$(".addbtn").click(
  function(){
    var w = $(window).width();
    if (w<707){
      if(shop_list.list.length>15){
        remove_item(15,5);   
      }
    }else if ((w<840)&&(w>707)){
      if(shop_list.list.length>19){
        remove_item(19,1);
      }
    }else if (w>=840){
      if(shop_list.list.length>17){
        remove_item(17,3);
      }
    }
    shop_list.list.push(
      {
        name:$("#input_name").val(),
        price:$("#input_price").val()
      }
    );
    name:$("#input_name").val("");
    price:$("#input_price").val("");
    showlist();
    
    
    var item_count = shop_list.list.length-1;
    var buyitem_name = "#buyitem_"+item_count;
    if (w<700){
      var hand_top = $(buyitem_name).offset().top-120*(Math.ceil(shop_list.list.length / 4));
    }
    else if ((w>=700) && (w<820)){
      var hand_top = $(buyitem_name).offset().top-120*(Math.ceil(shop_list.list.length / 5));
    }
    else if (w>=820){
      if(shop_list.list.length<6){
        var hand_top = $(buyitem_name).offset().top-20;
      }else {
        var hand_top = $(buyitem_name).offset().top-160*(Math.ceil(shop_list.list.length / 6));
      }
      
    }
    
    var hand_left = $(buyitem_name).offset().left;
    $(buyitem_name).css("opacity","0");
    
    $("#sticky_note").css("transform",'translate('+hand_left+'px,-'+hand_top+'px)');
    $("#note").css("opacity",'0');
    setTimeout(function () { 
      $("#sticky_note").css("transform",'none');
      $(buyitem_name).css("transition","1s");
      $(buyitem_name).css("opacity","1");
      $("#note").css("opacity",'1'); 
    }, 2000);
    
  }
);

function  remove_item(id,count){  
  
  shop_list.list.splice(id,count); /*slice強化版 要刪哪個位置的東西*/
  showlist();  
};