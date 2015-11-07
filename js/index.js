$(document).ready(function(){
  $("#controller").css("margin-left",$(window).width()/2-450);
  $("#wrapper").css("margin-left",$(window).width()/2-650);
  $("#controller1").data("position",$(window).width()/2-650)+"px";
  $("#wrapper").css("margin-top",$(window).height()/2-300);
  $("#personinfo").css("margin-left",$(window).width()-1300);
  $("#controller2").data("position",$(window).width()/2-650-$(window).width()+"px");
  $(".autobio").css("margin-left",$(window).width()-1300);
  $("#controll31").data("position",$(window).width()/2-650-$(window).width()*2+"px");
  $("#achievement").css("margin-left",$(window).width()-1300);
  $("#controll32").data("position",$(window).width()/2-650-$(window).width()*3+"px");
  $("#topic").css("margin-left",$(window).width()-1300);
  $("#controller4").data("position",$(window).width()/2-650-$(window).width()*4+"px");
  $("#controller5").data("position",$(window).width()/2-650-$(window).width()*5+"px");
 	$("#controller div").mouseover(function(){
  		$(this).animate({
  			opacity:1
  		},200,function(){});
      $("#wrapper").stop();
  		$("#wrapper").animate({
  			"margin-left":$(this).data("position")
  		},350,function(){});
     	}).mouseout(function(){
  		   $(this).animate({
  			opacity:0.65
  		},200,function(){});
     });
   $("#achievementcontroll div").mouseover(function(){
      $(this).animate({
         opacity:1
      },200,function(){});
   }).mouseout(function(){
      $(this).animate({
         opacity:0.65
      },200,function(){});
   });
   var achievementinner = [
      '<h1 style="margin-top:0px;">QRcode傳情網頁設計</h1>'+
      '<p>我是系會活動股的股員，主要是幫系上辦各種活動(例如食字路口、湯餃會等等)，這次是要舉辦系上傳情就有人建議要跟系上活動有關，於是就想到了QR code傳情。</p>'+
      '<p style="float:left;width:300px;">那是一個網頁卡片的形式，使用者可以在上面嵌上圖片、影片，我們會送實體卡片到收件人手上，收件者可以掃描QRcode得到網頁卡片的內容<br><br>宣傳網頁網址：<a target="_blank" href="http://myweb.ncku.edu.tw/~h34011097/pass_site/index.html">成大工資系傳情</a><br>卡片範例網址：<a target="_blank" href="http://myweb.ncku.edu.tw/~h34011097/pass_site/template/index.html">卡片範例</a></p>'+
      '<img src="imgs/cardexample.png" style="margin-left:100px;width:200px;float:left;">'
      ,
      '<h1 style="margin-top:0px;">UVA解演算法題庫</h1>'+
      '<p>這是我在大學時期參加的第一門硬課，這堂課會要求修課同學一個禮拜解5-7個題目，下圖是我其中一個線上審查系統的統計數據，雖然我的解題數據不是說很多很好看，但這也是我努力打基礎中的一環</p>'+
      '<img src="imgs/uva.png" style="margin-left:10px;width:700px;float:left;">'
      ,
      '<h1 style="margin-top:0px">權限分類+加密資料庫</h1>'+
      '<p>這是我在大學第一次分組寫程式，而且是擔任組長的角色，帶領同學完成這次專案，主要工作是實作權限分類跟資料庫加密的功能，簡單的描述'+
      '功能就是讓不同的使用者登入介面，程式會依照他們的身分顯示不同的東西，例如導師能看到自己導生較內部的資料，課堂老師卻不能，而資料庫裡面的東西全都是經過加密的'+
      '<img src="imgs/encrypt.png" style="margin-left:10px;margin-top:10px;width:280px;float:left;">'+
      '<img src="imgs/encrypt2.png" style="margin-left:30px;margin-top:10px;width:400px;float:left;">'
      ,
      '<h1 style="margin-top:0px">百萬大歌星視窗遊戲</h1>'+
      '<p>系上要舉辦送舊，有人提議可以玩百萬大歌星這個遊戲，我就提議說我可以負責設計這個遊戲，我之前只有使用QML設計2048，這次就挑戰設計百萬大歌星，這個也是努力了好一陣子才做出來的，下方有使用時影片。<a href="imgs/singer2.jpg">使用時圖片點此</a>&nbsp<a target="_blank" href="https://www.youtube.com/watch?v=lIDLOt4VAVM">影片點此</p></p>'+
      '<iframe style="float:left;margin-left:150px;" width="450" height="253" src="https://www.youtube.com/embed/lIDLOt4VAVM" frameborder="0" allowfullscreen></iframe>'
      ,
      '<h1 style="margin-top:0px">架設Hadoop分散式資料庫</h1>'+
      '資安實驗室博班生十分希望我把舊有的資料庫更換成分散式的資料庫並且推薦給我Hadoop資料庫讓我去研究並讓我上台報告我對Hadoop的了解程度，經過一個月的學習還有try and error之後我才在了解了Hadoop的大致架構，也成功地在把專案的資料庫系統改成Hadoop的資料庫。而那個專案主要是在製作分配金鑰的系統，稱為EZ-Privacy。下圖是我在實驗室安裝的Hadoop架構，這部分主要是實作。'+
      '<img src="imgs/hadoop.png" style="margin-left:200px;width:330px;margin-top:10px;">'
      ,
      '<h1 style="margin-top:0px">架設資料庫並設計資料庫管理系統</h1>'+
      '<p>這次實作是接了系上的打工，要為在職專班的行政單位撰寫資料庫管理的程式，我要寫程式幫助他們管理課程、學生、老師，但目前還在開發中，使用的是QtWidget、C++，下圖是開發中的介面。</p>'+
      '<img src="imgs/emba1.png" style="margin-left:10px;margin-top:10px;width:350px;float:left;">'+
      '<img src="imgs/emba2.png" style="margin-left:30px;margin-top:10px;width:350px;float:left;">'
   ];
   $("#achievementcontroll div").click(function(){
      var pos = -1;
      if ($(this).data("cata") == "passlove") {
         pos = 0;
      }else if($(this).data("cata") == "uva"){
         pos = 1;
      }else if($(this).data("cata") == "encript"){
         pos = 2;
      }else if($(this).data("cata") == "singer"){
         pos = 3;
      }else if($(this).data("cata") == "hadoop"){
         pos = 4;
      }else if($(this).data("cata") == "datacontroll"){
         pos = 5;
      }
      if($("#achievementright").css("display") == "none"){
         $("#achievementright").css("display","inline");
         $("#achievementright").animate({
            width:740,
            height:435
         },600,function(){
            $("#achievementright div").html(achievementinner[pos]);
            $("#achievementright div").animate({
               opacity:1
            },1000,function(){});
      });
      }else{
         $("#achievementright div").animate({
               opacity:0
            },300,function(){$(
            "#achievementright div").html(achievementinner[pos]);
            $("#achievementright div").animate({
            opacity:1
         },500,function(){});
         });
      }
   });
});