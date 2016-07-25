$(function(){

        var map = $("iframe")
        var tap = $("#tap")

        map.addClass("scrolloff"); 

        tap.click(function(){
        	tap.remove();
            map.removeClass("scrolloff"); 
        });

});