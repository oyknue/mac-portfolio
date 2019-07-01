var log = console.log;
var a = alert;

// splending후 로그인 페이지 이동
var windowWidth = $( window ).width();
if(windowWidth < 1440){
    $(".loading_bar").animate({
        "width" : "40rem"
    }, 5000);
}
else{
   $(".loading_bar").animate({
        "width" : "45rem"
    }, 5000); 
}

setTimeout("location.href='../html/login.html'",5000);
