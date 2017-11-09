var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]

var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay= document.getElementById("message")

colorDisplay.textContent = pickedColor




for (var i = 0; i <= square.length - 1; i++) {
	//add initial colors
	square[i].style.backgroundColor = colors[i]

	//add click 
	square[i].addEventListener("click", function(){
	//grab color of clicked square
	var clickedColor = this.style.backgroundColor
	//compare color to pickedColor
	if(clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct!"
		changeColors(clickedColor)
	}
	else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try again!"
		}
	}); 
}




function changeColors(color){
	//loop all squares
	for (var i = 0; i <= square.length - 1; i++) {
			square[i].style.backgroundColor = color;
		}

}



function pickColor(){
	Math.random()
}