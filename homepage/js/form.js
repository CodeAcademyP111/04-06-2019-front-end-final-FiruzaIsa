$(document).ready(function(){
  
    //   navbar -changing background color
    if (scrollY > 100) {
       $("header").css("background-color", "white");
       $(".navbar-brand img").attr("src", "image/logo1.png");
       $(".navbar-nav .nav-link ").attr("style", "color: black !important");
    } else {
       $("header").css("background-color", "");
       $(".navbar-brand img").attr("src", "image/logo1.png");
       $(".navbar-nav .nav-link ").attr("style", "color: black !important");
    }
      
    $(window).scroll(function() {
       if (scrollY > 100) {
           $("header").css("background-color", "white");
           $(".navbar-brand img").attr("src", "image/logo1.png");
           $(".navbar-nav .nav-link ").attr("style", "color: black !important");
       } else {
           $("header").css("background-color", "white");
           $(".navbar-brand img").attr("src", "image/logo1.png");
           $(".navbar-nav .nav-link ").attr("style",  "color: black !important");
       }
    })
})