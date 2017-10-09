//This finds the canvas element in the html webpage
	var canvas = document.getElementById("canvas");
	
	//this is a context object that is used to make the drawning on the canvas
	var context = canvas.getContext("2d");
	
	//creating a event to listen for mouse clicks of the canvas
	canvas.addEventListener("click", drawCircle);
	
	//creating the function to draw small circles on the canvas where clicked
	function drawCircle(){
		var c = document.getElementById("colorSelect");
		var colorSelected = c.options[c.selectedIndex].value;
		//making the varibles for the x and y axis
		var xLocation = event.offsetX;
		var yLocation = event.offsetY;
		
		//changing the style fill color
		context.fillStyle = colorSelected;
		//starting the begin path to make a circle
		context.beginPath();
		//making a cicle and moving it so clicking the center about
		context.arc(xLocation-5, yLocation-5, 2, 0, 2 * Math.PI);
		//commetting the context to the canvas
		context.fill();
	}
	
	//this is where the downloading for the picture is
	//making tha varible for the button and setting it to the id btn-download
	var button = document.getElementById('btn-download');
	//adding a event listener when it is clicked 
	button.addEventListener('click', function (e) {
		var dataURL = canvas.toDataURL('image/jpg');
		button.href = dataURL;
		});
	//this is to clear the canvas
	document.getElementById('clear').addEventListener('click', function() {
		context.clearRect(0, 0, canvas.width, canvas.height);
	  }, false);
