/**
 * Created by Roman on 05.04.2015.
 */
$(function(){
   $('.joinUs div span').on("mouseover",function(){
       /*$('.letter:eq(1), .letter:eq(2)').animate(
           {height:"99%"
            paddingTop:"40%"
           }
           , 1000);*/
       //$('.letter').eq(2).css("position","absolute").animate({top:"40%"}, 1000);
       $('.joinUs').animate({top:"-20%"}, 400);
       //$('.letter').eq(1)
       //$('.letter').eq(2).animate({top:"40%"}, 1000);
   });
    $('.joinUs').on('mouseleave', function(){
        $('.joinUs').animate({top:"-50%"}, 400);
    })
    $('.letter').on('mouseover', function(){
        $(this).siblings('.letter').stop().animate({
          opacity:'0.4'
        }, 400)
    }).on('mouseleave', function(){
        $(this).siblings('.letter').stop().animate({
            opacity:'1'
        }, 400)

    })
});
