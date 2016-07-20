$(function(){

	var container = $("#info-container")
	var icon = $("#info-icon")
	var title = $("#info-label")
	var blurb = $("#info-blurb")

	var nodeWheel = $("#node-wheels")

    nodeWheel.click(function(){
    	$(nodeWheel).css("opacity", 1)
    	$(nodeWheel).css("background-color", "#ff341f")
    	$(container).fadeOut(150,
    		function(){
		    	icon.attr("src", "./assets/icon_wheel.svg"); 
		    	title.text("WHEELS");
		    	blurb.text("The robots usually have articulated wheels or tank tracks that allow them to maneuver over debris, travel up steep inclines, and climb stairs.");
		    }
    	)
    	$(container).fadeIn(150)
	});


});