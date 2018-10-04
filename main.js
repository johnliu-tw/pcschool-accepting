$(function(){
    if(window.innerWidth < 576){
        $(".footer-md").hide()
        $(".footer-xs").show()           
    }
    else{
        $(".footer-md").show()
        $(".footer-xs").hide() 
    }   

    $(".footer-toggler-icon").click(function(){
        if($(this).hasClass("plus")){
            $(this).removeClass("plus");
            $(this).addClass("minus");
        }
        else{
            $(this).addClass("plus");
            $(this).removeClass("minus");            
        }
    })
})