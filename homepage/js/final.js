

$(document).ready(function(){
  
//   navbar -changing background color
if (scrollY > 100) {
   $("header").css("background-color", "white");
   $(".navbar-brand img").attr("src", "image/logo1.png");
   $(".navbar-nav .nav-link ").attr("style", "color: black !important");
} else {
   $("header").css("background-color", "");
   $(".navbar-brand img").attr("src", "image/logo.png");
   $(".navbar-nav .nav-link ").attr("style", "");
}
  
$(window).scroll(function() {
   if (scrollY > 100) {
       $("header").css("background-color", "white");
       $(".navbar-brand img").attr("src", "image/logo1.png");
       $(".navbar-nav .nav-link ").attr("style", "color: black !important");
   } else {
       $("header").css("background-color", "");
       $(".navbar-brand img").attr("src", "image/logo.png");
       $(".navbar-nav .nav-link ").attr("style", "");
   }
})
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//  on sixth section - when you scroll the page you will meet some increasing cypher
  
   if(scrollY>3250){
      var count=setInterval(function(){
    var linecode= $("#cover-img .lines-code span").text();
    var cofe=$("#cover-img .cofe span").text();
    var finish=$("#cover-img .finish-project span").text();
    var clients=$("#cover-img .satisfied-clients span").text();
 
 
 
 
    if(linecode<12416){
        linecode++
        $("#cover-img .lines-code span").text(linecode)
    } 
    
    if(cofe<365){
        cofe++
        $("#cover-img .cofe span").text(cofe)
    }
    if(finish<114){
        finish++
        $("#cover-img .finish-project span").text(finish)
    }
    if(clients<14825){
        clients++
        $("#cover-img .satisfied-clients span").text(clients)
    }
 
    
    
          },50)
  
       }
  
 
    
$(window).scroll(function () {
   if(scrollY>3250){
     var count=setInterval(function(){
   var linecode= $("#cover-img .lines-code span").text();
   var cofe=$("#cover-img .cofe span").text();
   var finish=$("#cover-img .finish-project span").text();
   var clients=$("#cover-img .satisfied-clients span").text();




   if(linecode<12416){
       linecode++
       $("#cover-img .lines-code span").text(linecode)
   } 
   
   if(cofe<365){
       cofe++
       $("#cover-img .cofe span").text(cofe)
   }
   if(finish<114){
       finish++
       $("#cover-img .finish-project span").text(finish)
   }
   if(clients<14825){
       clients++
       $("#cover-img .satisfied-clients span").text(clients)
   }

   
   
         },50)
 
      }
   })
     
 
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//  on second section will some elements move instantly
  
  
   if($(document).scrollTop()>150){
   $(".heading-section").animate({top: '0px'}, 1000);
 
 
   }
    
   if($(document).scrollTop()>150){
     $(".img-animated").animate({top: '0px'}, 1000);
   }
       
   
  
    if($(document).scrollTop()>350){
    $(".animate-text").children().eq(0).animate({top: '0px'}, 1000);
    $(".animate-text").children().eq(1).animate({top: '0px'}, 1400); 
    $(".animate-text").children().eq(2).animate({top: '0px'}, 1800);

    $(".animate-text").children().eq(3).animate({top: '0px'}, 2200);
    $(".animate-text").children().eq(4).animate({top: '0px'}, 2600);
    $(".animate-text").children().eq(5).animate({top: '0px'}, 3000);
 
    }

   
        $(window).scroll(function() { 
   if($(document).scrollTop()>150 && $(".heading-section").css("top")!="0px"){
      $(".heading-section").animate({top: '0px'}, 1000);


  }
 
   })

$(window).scroll(function() { 
   if($(document).scrollTop()>150 && $(".img-animated").css("top")!="0px"){
   

  $(".img-animated").animate({top: '0px'}, 1000);

}
 
})

//on third section will come across moving text one by one slowly

$(window).scroll(function() { 
   if($(document).scrollTop()>1300 && $(".animate-text").css("top")!="0px"){
    $(".animate-text").children().eq(0).animate({top: '0px'}, 1000);
    $(".animate-text").children().eq(1).animate({top: '0px'}, 1400); 
    $(".animate-text").children().eq(2).animate({top: '0px'}, 1800);

    $(".animate-text").children().eq(3).animate({top: '0px'}, 2200);
    $(".animate-text").children().eq(4).animate({top: '0px'}, 2600);
    $(".animate-text").children().eq(5).animate({top: '0px'}, 3000);
   }
   })

   $("#accordion h6").click(function () {
    $(this).next().slideToggle();
    $(this).children().children().toggleClass("fas fa-plus").toggleClass("fas fa-minus");

})
   
   
})

  