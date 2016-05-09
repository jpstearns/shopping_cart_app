// var fenders = getCookie("fender");
// var pedals = getCookie("pedal");
// var amps= getCookie("amp");

var cookiestring = document.cookie;
console.log(cookiestring);
	document.getElementById("cookie").innerHTML += " "+cookiestring;



// function getCookie ( cookiename ){
//   var cookiestring = document.cookie;
//   if (cookiestring.length != 0) {
//     var cookievalue = cookiestring.match ( '(^|;)[\s]*' + cookiename + '=([^;]*)' );
//     if(cookievalue!=null){
//     	return decodeURIComponent ( cookievalue[2] ) ;

//     }
//     else 
//     	return "";
//   }
//   return '' ;
// }