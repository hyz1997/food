var Img = ['img/index-show1.jpg','img/index-show2.jpg','img/index-show3.jpg','img/index-show4.jpg','img/index-show5.jpg'];
var index = 0;
$(function() {

	$(".dropdown").hover(function(){
		$(this).find(".dropdown-menu").show();
		console.log(1);
	},function() {
		$(this).find(".dropdown-menu").hide();
	});
})