$(function(){

	var container = $("#info-container")
	var icon = $("#info-icon")
	var title = $("#info-label")
	var blurb = $("#info-blurb")
	var nodes = $(".node")

	var gripper = $("#node-gripper")
	var camera = $("#node-camera")
	var wheel = $("#node-wheels")
	var speaker = $("#node-speakers")
	var ui = $("#node-interface")

    gripper.click(function(){
    	nodes.removeAttr("style");
    	gripper.css("background-color", "#ff341f");
    	gripper.css("opacity", 1);
    	container.fadeOut(250,
    		function(){
		    	icon.attr("src", "./assets/icon_gripper.svg"); 
		    	title.text("GRIPPER");
		    	blurb.text("The extendable grippers on some robots can handle delicate tasks, like putting a key in a door lock, holding tools like saws, and delivering a fast punch for breaking windows.");
		    }
    	)
    	container.fadeIn(250)
	});

    camera.click(function(){
    	nodes.removeAttr("style");
    	camera.css("background-color", "#ff341f");
    	camera.css("opacity", 1);
    	container.fadeOut(250,
    		function(){
		    	icon.attr("src", "./assets/icon_camera.svg"); 
		    	title.text("CAMERA");
		    	blurb.text("Robots are fitted with HD cameras able to pan and zoom. Some offer continuous panoramic vision by supporting up to seven cameras.");
		    }
    	)
    	container.fadeIn(250)
	});

    wheel.click(function(){
    	nodes.removeAttr("style");
    	wheel.css("background-color", "#ff341f");
    	wheel.css("opacity", 1);
    	container.fadeOut(250,
    		function(){
		    	icon.attr("src", "./assets/icon_wheel.svg"); 
		    	title.text("WHEELS");
		    	blurb.text("The robots usually have articulated wheels or tank tracks that allow them to maneuver over debris, travel up steep inclines, and climb stairs.");
		    }
    	)
    	container.fadeIn(250)
	});

    speaker.click(function(){
    	nodes.removeAttr("style");
    	speaker.css("background-color", "#ff341f");
    	speaker.css("opacity", 1);
    	container.fadeOut(150,
    		function(){
		    	icon.attr("src", "./assets/icon_speaker.svg"); 
		    	title.text("SPEAKERS");
		    	blurb.text("The microphone and speakers provide two-way communication. This proves especially useful during standoffs or hostage negotiations.");
		    }
    	)
    	container.fadeIn(250)
	});

    ui.click(function(){
    	nodes.removeAttr("style");
    	ui.css("background-color", "#ff341f");
    	ui.css("opacity", 1);
    	container.fadeOut(250,
    		function(){
		    	icon.attr("src", "./assets/icon_interface.svg"); 
		    	title.text("CONTROL");
		    	blurb.text("They can be controlled wirelessly using a joystick and monitor or, more likely these days, a tablet or other small computer that displays images from the robot’s cameras.");
		    }
    	)
    	container.fadeIn(250)
	});

});