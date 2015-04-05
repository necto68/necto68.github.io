/**
 * Created by Roman on 05.04.2015.
 */
$(function(){
   $('.joinUs div span').on("mouseover",function(){
       $('.joinUs').stop().animate({top:"-20%"}, 400);
   });
   $('.joinUs').on('mouseleave', function(){
        $('.joinUs').stop().animate({top:"-50%"}, 400);
   });

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
