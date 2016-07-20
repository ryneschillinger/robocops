$(function(){

        var map = $("iframe")
        var container = $("#map-container")

        map.addClass("scrolloff"); 

        container.click(function(){
            map.removeClass("scrolloff"); 
        });

        container.mouseleave(function (){
            map.addClass("scrolloff"); 
        });
});