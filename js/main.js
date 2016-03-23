var playt = false;
$(window).load(function() {
  // $("body").everyTime("5s",function(){
  //   if($(".logo").css("margin-left") == "0px"){
  //     $(".logo").css("margin-left", "-100%");
  //   }else{
  //     $(".logo").css("margin-left", "0");
  //   }
  // });


  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
          return false;
      }
    }
  });

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  });

  $("#noclick").click(function() {
    if($(".play-gif").css("display")=="block") {
      $("#phone").click();
      setTimeout(
      function()
      {
        $("#works_phone > div.gifplayer-wrapper > img:nth-child(4)").remove();
        $("#phone").show()
        $(".play-gif").show();
      }, 6950);
    }
  });

  $('body').parallax({speedFactor: 0.2});
  $('#home').parallax({speedFactor: 0.6});
  $('#works').parallax({speedFactor: 0.6});
  $('#works_bg2').parallax({speedFactor: 0.6});
  $('#business_bg').parallax({speedFactor: 0.6});
  $('#team_bg').parallax({speedFactor: 0.6});
  $('#contact').parallax({speedFactor: 0.2});
  $('#contact_bg').parallax({speedFactor: 0.6});
  $('.gifs').gifplayer();

  $("#works").waypoint(function(){
    if(playt == false){
      $("#noclick").click();
      playt = true;
    }
  });

  $(".team_box").scroll(function () {
      $("#tipsign").hide();
      if($(".team_box").scrollLeft() == 0){
          $("#tipsign").show();
      }
  });

  // $(window).scroll(function(){
  //   var scrollVal = $(this).scrollTop();
  //
  //   var otop1 = $("#about_content").position().top;
  //   var otop2 = $("#about_img1").position().top;
  //   var otop3 = $("#about_img2").position().top;
  //   $("#about_img1").css("opacity", 1-((scrollVal - otop1)/100));
  //   $("#about_img2").css("opacity", 1-((scrollVal - otop2)/100));
  //   $("#about_img3").css("opacity", 1-((scrollVal - otop3)/100));
  //
  //
  // });
});

var list = [
    {
        content: '<img src="images/logo.png" width="100%" alt="">'
    },
    {
        content: '<a href="#dd"><img src="images/comingsoon.png" width="100%" alt=""></a>'
    }
];

var S = new iSlider(document.getElementById('iSlider-wrapper'), list, {
    isAutoplay: 1,
    isLooping: 1,
    isOverspread: 1,
    duration: 5000,
    animateTime: 500,
    fixPage: 0
});
