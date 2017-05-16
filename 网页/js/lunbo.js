$(function() {
	$(".small_button li").hover(function() {
		index = $(this).index()
		$(".lunbo img").attr('src',Img[index])
		$(this).addClass("button_active").siblings().removeClass("button_active");
	})
    setInterval(function() {
    	if(index!=5) {
    		index++;
    		i = index;
    		$(".lunbo img").attr('src',Img[index]);
    		$('.small_button li:eq(index)').addClass("button_active").siblings().removeClass("button_active");
    	} else {
    		
    		index=0;
    		
    	}console.log(Img[index]);

},3000);
})