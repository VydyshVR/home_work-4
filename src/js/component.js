$(document).ready(function() { 
  $('.head-img img').click(function(){
    var destination = $(".program").offset().top - 0;
    $("body,html").animate({ scrollTop: destination}, 500 );
  });
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      480:{
          items:1,
          nav:false
      },
      1000:{
          items:1,
          nav:true,
          loop:false
      }
  }
});