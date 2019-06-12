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
    window.open("https://oyknue-note.firebaseapp.com/html/note.html", "_blank", "toolbar=no, top=25,left=50, width=500, height=800");
  }); //메모앱
  $("#weather").click(function(){
    window.open("https://oyknue-weather.firebaseapp.com", "_blank", "toolbar=no, top=25,left=50,width=500, height=800");
  }); //날씨
  $("#game").click(function(){
    window.open("https://oyknue-note.firebaseapp.com/html/note.html", "_blank", "toolbar=no, top=25,left=50,width=500, height=800");
  }); //경마게임
  $("#game").click(function(){
    window.open("https://oyknue-note.firebaseapp.com/html/note.html", "_blank", "toolbar=no, top=25,left=50,width=500, height=800");
  }); //프로필
  $("#safari").click(function(){
    window.open("https://oyknue-note.firebaseapp.com/html/note.html", "_blank", "toolbar=no, top=25,left=50,width=500, height=800");
  }); //풀무원
  $("#chrome").click(function(){
    window.open("https://oyknue-note.firebaseapp.com/html/note.html", "_blank", "toolbar=no, top=25,left=50, width=500, height=800");
  }); // 퍼시스
  $("#score").click(function(){
    window.open("http://oyknue.dothome.co.kr/score/index.html", "_blank", "toolbar=no, top=25,left=50,width=500, height=800");
  }); //성적프로그램
  $("photo").click(function(){
    window.open("https://oyknue-note.firebaseapp.com/html/note.html", "_blank", "toolbar=no, top=25,left=50,width=500, height=800");
  }); //목업
  $("#calc").click(function(){
    window.open("https://oyknue-note.firebaseapp.com/html/note.html", "_blank", "toolbar=no, top=25,left=50,width=500, height=800");
  }); //계산기

//drag & drop(jquery-ui)
$(function() {
  $( ".folder, .fodal" ).draggable({
    "opacity": 0.3
  });
  $( ".folder, .fodal" ).droppable();
});
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
      //alert("???"); 
      //alert, console 전부 정상적으로 가동 됨. 
      $(".fodal").css({"display":"block"});
    }
});
$(".fodal-close").click(function(){
  $(".fodal").hide();
});

// list누르면 sub nav 뿅
$(".list").click(function(){
  $(".sub_nav").animate({
    right:'0',
    width: 'toggle'
  }, 1000,function(){});
});
$(".sub_list").click(function(){
  $(".sub_nav").animate({
    right:'-10%',
    width: 'toggle'
  }, 1000,function(){});
});

$(".logo").click(function(){
  $(".macs").slideToggle('slow');
});

//재시동 버튼 오류해결하기.왜 splending으로 안가지? location.href도 안됨.
$("#off").click(function(){
  alert("정말로 종료하시겠습니까?");
  window.close(); //왜 window에서는 내 맘대로 되는데 맥은 안됨?.?
});
$("#restart").click(function(){
  document.location.href = '../html/splending.html';
});
$("#mobile").click(function(){
  //document.location.href = '../mobile/html/mobile.html';
  window.open("../mobile/html/mobile.html", "_blank", "toolbar=no", "top=25,left=50, width=375, height=812")
});

//post-it drag & drop
$(function() {
  $( ".postit" ).draggable({
    "opacity": 0.3
  });
  $( ".postit" ).droppable();
});

//파이어베이스 메모
var db = firebase.database();
var ref = null;

db.ref("memos/memo").on("child_added", onAdd);
db.ref("memos/memo").on("child_removed", onRev); //firebase rmove(data delete)

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

//post it 삭제, 불러오기
$(".bt_remove").click(function(){
  $(".postit").hide();
});

