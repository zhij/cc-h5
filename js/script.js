var o = new Orienter();
o.onOrient = function (obj) {
    var a, b;
    a = obj.lon < 180 ? obj.lon : obj.lon - 360;
    b = obj.lat;

    a = a > 0 ? a > 50 ? 50 : a : a < -50 ? -50 : a;
    b = b > 0 ? b > 50 ? 50 : b : b < -50 ? -50 : b;


    console.log([a,b]);

    $(".m-person").css("-webkit-transform", "translate3d(" + a + "px," + b + "px,0)");
    $(".m-house").css("-webkit-transform", "translate3d(" + 1.5*a + "px," + b + "px,0)");

};
o.init();

// 获取验证码事件
var isClicked = false,
	i = 60;
$('.getIdCode').click(function(){
	var that = this;
	if(!isClicked){
		isClicked = true;
		$(that).text(i+'s');
		// todo 调获取验证码接口
		// ...
		var timer1 = setInterval(function(){
			i --;
			if(i > 0){
				$(that).text(i+'s');
			} else {
				clearInterval(timer1);
				$(that).text('获取验证码');
				isClicked = false;
				i = 60;
			}
		}, 1000)
	}
})

// 检测用户输入
function checkForm(){
	if(!$('.phone').val()){
		alert("请输入手机号");
		$('.phone').focus();
		return
	} else if(!$('.idCode').val()){
		alert("请输入验证码");
		$('.idCode').focus();
		return
	} else {
		// todo 调校验 验证码接口
		// ... 
		if(true){	// 验证码填写正确
			return true
		} else {
			alert("验证码错误");
			return
		}
	}
}

// 领取金币按钮事件
var $send = $('#js-send');
var isRepeat = false;
$send.click(function(){
	if(checkForm()) {
		// todo 判断是新用户还是老用户，新用户显示领取成功，老用户显示已经领取过啦
		// ...

		// 领取成功
		$(".m-section").removeClass("show");
		$(".section-success").addClass("show");

		// 已经领过啦
		$(".m-section").removeClass("show");
		$(".section-has").addClass("show");
	}
})

// 人物切换
var $person = $('#js-person');
setInterval(function(){
	if($person.hasClass('person1')){
		$person.removeClass('person1').addClass('person2');
	} else {
		$person.removeClass('person2').addClass('person1');
	}
}, 5000)