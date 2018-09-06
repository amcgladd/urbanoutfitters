$(document).ready(function(){
  $(window).resize(function(){
	if ($(window).width() <= 1520){
		$("#logo1").hide();
    $("#logo2").show();
  } else if ($(window).width() > 1520){
		$("#logo1").show();
    $("#logo2").hide();
  }
  });
  $(window).resize(function(){
	if ($(window).width() <= 770){
		$(".big-pic").hide();
    $(".narrow-pic").show();
  } else if ($(window).width() > 770){
    $(".big-pic").show();
    $(".narrow-pic").hide();
  }
  });
  $(window).resize(function(){
  if ($(window).width() <= 620){
    $("#head2").hide();
    $("#logo1").show();
    $("#logo2").hide();
  } else if ($(window).width() > 620 && $(window).width() < 769){
    $("#head2").show();
    $("#logo1").hide();
    $("#logo2").show();
  }
  });
});
