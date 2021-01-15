function openNav(){
    document.getElementById("popup-windw").style.width = ("290px");
    }
function closeNav(){
        document.getElementById("popup-windw").style.width = ("0");
    }


    $(document).ready(function(){
     //sticky menu
     $(".add-sticky").waypoint(function(direction){
         if(direction == "down"){
             $("nav").addClass("sticky");
            }
            else{
                 $("nav").removeClass("sticky");
             }
     });
     //Owl carousel
      $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    });
