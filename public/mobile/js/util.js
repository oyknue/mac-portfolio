

// px을 제거하고 숫자를 리턴
function number(str) {
	return Number(str.replace("px", ""));
}

// 시간을 보내면 오전/오후를 연산해서 리턴하는 함수
function getAmPm(hour) {
	if(hour < 10) return "오전 0" + hour;
	else if(hour == 10 || hour == 11) return "오전 " + hour;
	else if(hour == 12) return "오후 " + hour;
	else if(hour >= 13 && hour < 22) return "오후 0" + (hour - 12);
	else return "오후 " + (hour - 12);
}

// 10 이하를 보내면 0을 붙여서 리턴하는 함수
function zp(n) {
	if(n < 10) return "0" + n;
	else return n;
}

// 우리나라 공용 시간을 리턴해주는 함수
/*
- localDate();
- localDate(1508653948712);
- 리턴값 : 2018-01-03 11:12:13
*/
function localDate(val) {
	var d = null;
	var dt = '';
	if(val == undefined) d = new Date();
	else if(typeof val == "number") d = new Date(val);
	else return 0;
	dt += d.getFullYear() + '-';
	dt += zp(d.getMonth() + 1) + '-';
	dt += zp(d.getDate()) + ' ';
	dt += zp(d.getHours()) + ':';
	dt += zp(d.getMinutes()) + ':';
	dt += zp(d.getSeconds());
	return dt;
}

// 파일명을 분리해서 랜덤한 파일명/순수파일명/확장자를 리턴해 주는 함수
/*
- 실행문
	var file = splitName(원본파일명);
- 리턴값
	{
		allow: "image", "file", "notAllow"
		ext: 확장자,
		oriName: 확장자를 제외한 원본파일명
		oriFile: 확장자를 포함한 원본파일명,
		newName: 확장자를 제외한 랜덤생성된 파일명,
		newFile: 확장자를 포함한 랜덤생성된 파일명,
		time: 작업한 시간의 Timestamp
	}
*/
function splitName(name) {
	var obj = {};
	var arr = name.split('.');
	obj.time = new Date().getTime();
	obj.ext = arr.pop();
	obj.oriName = arr.join('.');
	obj.oriFile = name;
	obj.newName = obj.time + '-' + Math.floor(Math.random() * 90 + 10);
	obj.newFile = obj.newName + '.' + obj.ext;
	obj.allow = allowExt(obj.ext);
	return obj;
}

// 확장자를 보내면 파일의 허락여부를 리턴
function allowExt(ext) {
	var imgExt = ['jpg', 'jpeg', 'png'];
	var fileExt = ['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'hwp', 'txt', 'zip'];
	for(var i in imgExt) {
		if(ext == imgExt[i]) return "image";
	}
	for(var j in fileExt) {
		if(ext == fileExt[j]) return "file";
	}
	return "notAllow";
}

// 문자열을 보내면 지정한 크기를 제외한 나머지 문자열을 리턴
/*
- 실행문 : 
	cutStr(문자열, [자리수, 꼬리말]);
	cutStr("문자열")
	cutStr("문자열", 12)
	cutStr("문자열", 12, "**")
	cutStr("문자열", "***")
*/
function cutStr(_str, _len, _tail) {
	var str = _str;
	var len = 10;
	var tail = '...';
	var txt = '';
	if(typeof _len == "number") {
		len = _len;
		if(typeof _tail == "string") tail = _tail; 
	}
	else if(typeof _len == "string") {
		tail = _len;
	}
	return str.substr(0, len) + tail;
}