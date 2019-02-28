$('nav.mobile').click(function(){
	$(this).toggleClass('open');
	$('.mobileNav_content').toggleClass('open');
});

$('.mobile_nav_item').click(function(){
	$('nav.mobile').toggleClass('open');
	$('.mobileNav_content').toggleClass('open');
});

$('#p0').click(function(){
	window.open("#");
});

$('#p1').click(function(){
	window.open("#");
});

$('#p2').click(function(){
	window.open("#");
});

$('#p3').click(function(){
	window.open("#");
});

$('#p4').click(function(){
	window.open("#");
});

// images

  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
