//배경화면 전환
var depth = 100; 
var st = 0; 
var ed = $(".back_img > .main").length -1; 
var interval = setInterval(ani, 5000);
function ani(){
  $(".back_img > .main").eq(st).css({"z-index": depth++, "opacity": 0});
  $(".back_img > .main").eq(st).stop().animate({"opacity": 1},3000,function(){
    if(st == ed) st = 0;
    else st++;
  });
}

//click info
$(".info").click(function(){ 
  $(".info").hide();
});

//timezone
function getToday() {
  var week = new Array('(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)');
  var today = new Date().getDay();
  var todayLabel = week[today];
  return todayLabel;
}
function getAmPm(hour) {
	if(hour < 10) return "오전 0" + hour;
	else if(hour == 10 || hour == 11) return "오전 " + hour;
	else if(hour == 12) return "오후 " + hour;
	else if(hour >= 13 && hour < 22) return "오후 0" + (hour - 12);
	else return "오후 " + (hour - 12);
}
function zp(n) {
	if(n < 10) return "0" + n;
	else return n;
}

function localDate(val) {
  var dt = '';
	var d = null;
	if(val == undefined) d = new Date();
	else if(typeof val == "number") d = new Date(val);
  else return 0;
  dt += getToday(d.getDay()) + ' ';
	dt += getAmPm(d.getHours()) + ':';
	dt += zp(d.getMinutes());
  return dt;
}
$("#date").html(localDate());


//hover evt
$(".doc li").each(function(){
  $(this).hover(function(){
    $(this).children('.app').css({"display":"block"});
  },function (){
    $(this).children('.app').css({"display":"none"});
  });
});

  $("#git").click(function(){
    window.open("https://github.com/oyknue", "_blank", "toolbar=no, top=25,left=50, width=500px, height=800px");
  }); //깃
  $("#memo").click(function(e){
    window.open("https://oyknue-note.firebaseapp.com/html/note.html", "_blank", "toolbar=no, top=25,left=50, width=800, height=1000");
  }); //메모앱
  $("#weather").click(function(){
    window.open("https://oyknue-weather.firebaseapp.com", "_blank", "toolbar=no, top=25,left=50,width=1000, height=800");
  }); //날씨
  $("#game").click(function(){
    window.open("https://racing-oyknue.web.app", "_blank", "toolbar=yes, top=25,left=50,width=1800, height=1000");
  }); //경마게임
  $("#ibooks").click(function(){
    window.open("http://book.cafe24app.com", "_blank", "toolbar=no, top=25,left=50,width=1800, height=1000");
  }); //node books
  $("#safari").click(function(){
    window.open("https://oyknue-pulmuone.web.app", "_blank", "toolbar=no, top=25,left=50,width=1800, height=1000");
  }); //풀무원
  $("#chrome").click(function(){
    window.open("https://oyknue-pr.web.app", "_blank", "toolbar=no, top=25,left=50, width=1800, height=1000");
  }); // 르쿠르제
  $("#score").click(function(){
    window.open("http://oyknue.dothome.co.kr/score/index.html", "_blank", "toolbar=no, top=25,left=50,width=500, height=800");
  }); //성적프로그램
  $("#firefox").click(function(){
    window.open("https://oyknue-fursys.web.app", "_blank", "toolbar=no, top=25,left=50,width=1800, height=1000");
  }); //목업
  $("#util").click(function(){
    window.open("https://applestore-oykue.web.app", "_blank");
  }); //계산기

//drag & drop(jquery-ui)
$(".folder, .fodal").draggable({"opacity": 0.3});
$(".folder, .fodal").droppable();

//folder name
$(".folder").each(function(){
  $(this).hover(function(){
    $(this).children('.folder_name').css({"display":"block"});
  },function (){
    $(this).children('.folder_name').css({"display":"none"});
  });
});
//folder modal: dnl click evt로 모달창 띄우기
$(".folder").dblclick(function(){
    if($(".fodal").css("display") == "none"){
      $(".fodal").css({"display":"block"});
    }
});
$(".fodal-close").click(function(){
  $(".fodal").hide();
});

//fodal 리스트 클릭하면 해당 사진 뜨도록 처리
$.ajax({
  type: "get",
  url: "../json/img.json", 
  dataType: "json",
  success: function (res) {

    for(var i in res.img){
      html = '<li data-src="'+res.img[i].src+'">'+res.img[i].tit+'</li>';
      $(".pic_tit").append(html);
    }

    $(".pic_tit > li").click(function(){
      $(".pic_b > img").attr("src", $(this).data('src'));
    });

    $(".pic_tit >li").eq(1).trigger("click");
    }

  });

// list누르면 sub nav 뿅
$("#bt_list").click(function(){
  $(".sub_nav").animate({
    right:'0',
    width: 'toggle'
  }, 1000,function(){});
});
$("#bt_list2").click(function(){
  $(".sub_nav").animate({
    right:'-250px',
    width: 'toggle'
  }, 1000,function(){});
});



//post it 삭제, 불러오기
$(".bt_remove").click(function(){
  $(".postit").hide();
});
$("#bt_new").click(function(e){
  $(".postit").show();
});
$("#bt_new2").click(function(e){
  $(".postit").show();
});

$(".logo").click(function(){
  $(".macs").slideToggle('slow');
});

//재시동 버튼 오류해결하기.왜 splending으로 안가지? location.href도 안됨.
$("#off").click(function(){
  alert("정말로 종료하시겠습니까?");
  window.close(); //window에서 문제 없으나 mac에서 좀 이상한듯 함. 확인요망.
});
$("#restart").click(function(){
  document.location.href = '../html/splending.html';
});

// 모바일버전 전환
function popup(link01){ 
  window.open(link01,"_blank","width=375px, height=834px, resizable=no;"); 
} 

//post-it drag & drop
$(function() {
  $( ".postit" ).draggable({
    "opacity": 0.3
  });
  $( ".postit" ).droppable();
});

//파이어베이스 메모기능 구현
var db = firebase.database();
var ref = null;
db.ref("memos/memo").on("child_added", onAdd);
db.ref("memos/memo").on("child_removed", onRev); //firebase remove(data delete)
  
function onAdd(data) {
  var tit = data.val().content.substring(0, 10);
  var html = `
    <div class="nav pointer clear" id="${data.key}" onclick="navToggle(this);">
        <i class="fas fa-window-close pointer" onclick="dataRev(this);"></i>
        <div class="nav_tit">${tit}</div>
        <div class="nav_cont">${data.val().content}</div>
    </div>`;
	$(".navs").prepend(html);
}
function onRev(data) {
	$("#"+data.key).remove(); //jQuery remove (tag delete)
}

$(".bt_save").on("click", function(){
	db.ref("memos/memo").push({
		content: $(".postCont").val()
	}).key;
	$(".postCont").val('');
});

function dataRev(obj) {
	var key = $(obj).parent().attr("id");
	db.ref("memos/memo/"+key).remove();
}

function navToggle(obj){
  var val = $(obj).hasClass('navClass');
  if (val == false) {
    $(obj).addClass('navClass');
  }
  else{
    $(obj).removeClass('navClass');
  }
}

//배경화면 클릭하면 sub_nav, fodal, thismac, macs 닫히기 
$(".back_img").click(function(){
  $(".sub_nav , .fodal, .thismac_modal, .macs").hide();
});


//이 mac에 관하여
$("#thismac").click(function(){
  $(".thismac_modal").css({"display":"block"});
});
$(".thismac_modal").click(function(){
  $(this).css({"display":"none"});
});