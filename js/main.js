var playf = false;
function videoend() {
    $("#works_play").show();
}
/*! Copyright 2011, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.0.3
*
* Requires: jQuery 1.2.3+
*/
(function(a){a.preload=function(){var d=Object.prototype.toString.call(arguments[0])==="[object Array]"?arguments[0]:arguments;
var c=[];var b=d.length;for(;b--;){c.push(a("<img />").attr("src",d[b]));}};})(jQuery);

$(window).load(function() {
    $.preload( 'images/c_twitter_h.png',
        'images/c_insta_h.png',
        'images/c_youtube_h.png',
        'images/c_facebook_h.png'
      );
  // $("body").everyTime("5s",function(){
  //   if($(".logo").css("margin-left") == "0px"){
  //     $(".logo").css("margin-left", "-100%");
  //   }else{
  //     $(".logo").css("margin-left", "0");
  //   }
  // });
  // var video=$("#works_video")[0];
  $("#works_play").click(function() {
      var video = document.getElementById("works_video");
      video.play();
      $("#works_play").hide();
  });

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

  $('body').parallax({speedFactor: 0.2});
  $('#home').parallax({speedFactor: 0.6});
  $('#works').parallax({speedFactor: 0.6});
  $('#works_bg2').parallax({speedFactor: 0.6});
  $('#business_bg').parallax({speedFactor: 0.6});
  $('#team_bg').parallax({speedFactor: 0.6});
  // $('#contact').parallax({speedFactor: 0.1});
  $('#contact_bg').parallax({speedFactor: 0.6});
  $('.gifs').gifplayer();

  $("#works").waypoint(function(){
      if (playf == false){
          var video = document.getElementById("works_video");
          video.play();
          $("#works_play").hide();
          playf = true;
      }
  });

  $("#about_content").waypoint(function(){
     $("#about_img1").css("opacity","1");
     $("#about_img2").css("opacity","1");
     $("#about_img3").css("opacity","1");
  });

  $("#about_1").waypoint(function(){
     $("#about_img1").css("opacity","0");
     $("#about_img2").css("opacity","1");
     $("#about_img3").css("opacity","1");
  });

  $("#about_img1").waypoint(function(){
     $("#about_img1").css("opacity","1");
     $("#about_img2").css("opacity","0");
     $("#about_img3").css("opacity","1");
  });

  $("#about_img2").waypoint(function(){
     $("#about_img1").css("opacity","1");
     $("#about_img2").css("opacity","1");
     $("#about_img3").css("opacity","0");
  });

  $(".team_box").scroll(function () {
      $("#tipsign").hide();
      if($(".team_box").scrollLeft() == 0){
          $("#tipsign").show();
      }
  });

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
