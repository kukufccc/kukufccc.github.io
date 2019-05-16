console.log('Hello');
$(document).ready(function(){

  $("#owlone").owlCarousel({
      items: 3.9,
      loop: true,
      nav: true,
      dots:false,
      responsive:{
          0:{
            items: 1,
          },
          550:{
            items: 2,
          },
          1200:{

          },
      }
  });
  $("#owltwo").owlCarousel({
      items: 2,
      nav: true,
      navText:['Назад','Вперед'],
      responsive:{
          0:{
            items: 1,
          },
          550:{
            items: 1,
          },
          1200:{

          },
      }
  });
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if(x.className === "topnav"){
        x.className += " responsive";
    }else{
        x.className = "topnav";
    }
}
