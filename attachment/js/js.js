$(document).ready(function(){
	var ScreenW = $(window).width();
	var ScreenH = $(window).height();
	var one = $('#one');
	var two = $('#two');
	var three = $('#three');
	function Visibility(block){
		var viewer = $(document).scrollTop() + 200; 
		if(viewer >= block.position().top){
			block.attr('id','active');
		}
	}
	$(document).scroll(function(){
		Visibility(one);
		Visibility(two);
		Visibility(three);
		if($(document).scrollTop() >= ScreenH){
			$('div.header>div:nth-child(1)').attr('id','change');
		}else if($(document).scrollTop() <= ScreenH){
			$('div.header>div:nth-child(1)').removeAttr('id');
		}
	})

	var urlPage = location.href.split('/');
	var l = urlPage.length - 1;
	$(".header a[href='"+urlPage[l]+"'] li").css('background','rgba(0,0,0,0.5)');

	// var start_time = 60;
	// var i = 0;
	// function mytime(){
	// 	window.onblur = function () {
 //    		setTimeout(function(){
	// 		text.querySelector('h1').innerHTML = start_time - i;
	// 		i++
	// 		,1000});
	// 	}
	// }
	// if(start_time = 60){ 
	// 	setInterval(mytime, 1000);
	// }
// 	setInterval(function() {
//         $("#text").html(formatDate(new Date()));
//       }, 1000);
//       function formatDate(date) {
//         var hour = "0" + date.getHours(),
//             minute = "0" + date.getMinutes(),
//             second = "0" + date.getSeconds();
//         return [hour.slice(-2), minute.slice(-2), second.slice(-2)].join(":");
// };
	
	
	
	//функция вызова таймера
});
    