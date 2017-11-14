
var numsquare = 6;
var colors = [];
var pickedColor;

var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay= document.getElementById("message")
var h1 = document.querySelector("h1")
var resetButton = document.getElementById("reset")
var modeButton = document.querySelectorAll(".mode")


init()

function init(){
	for (var i = 0; i < modeButton.length; i++) {
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected")
		modeButton[1].classList.remove("selected")
		this.classList.add("selected");

		if(this.textContent === "Easy") {
			numsquare = 3;
		}
		else {
			numsquare = 6;
		}

		reset();
	})
}

for (var i = 0; i <square.length; i++) {
	//add click 
	square[i].addEventListener("click", function(){
	//grab color of clicked square
	var clickedColor = this.style.backgroundColor
	//compare color to pickedColor
	if(clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct!"
		changeColors(clickedColor)
		h1.style.backgroundColor = pickedColor
		resetButton.textContent = "PLAY AGAIN?"
	}
	else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try again!"
		}
	});
	h1.style.backgroundColor = "steelblue"; 
}
	reset()

}



function reset(){
	//generate all new colors
    colors = generateRandomColors(numsquare)
    //pick a new random color from array
    pickedColor = pickColor()
    //change colorDisplay
    colorDisplay.textContent = pickedColor
    //change colors of squares
    for (var i = 0; i<square.length; i++) {
    if(colors[i]){
    	square[i].style.display = "block"
		square[i].style.backgroundColor = colors[i];
	}
	else{
		square[i].style.display = "none";
	}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
};




resetButton.addEventListener("click", function(){
	reset()
})



function changeColors(color){
	//loop all squares
	for (var i = 0; i <= square.length - 1; i++) {
			square[i].style.backgroundColor = color;
		}

}



function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}


function generateRandomColors(num){
 	//make an array
 	var arr = []
 	//repeat num time
 	for (var i = 0; i < num; i++) {
 	//add num random colors to array
	arr.push(ramdomColor())
	}
	return arr
}


function ramdomColor(){
	// pick r 0-255
	var r = Math.floor(Math.random() * 256);
	// pick g 0-255
	var g = Math.floor(Math.random() * 256);
	// pick b 0-255
	var b = Math.floor(Math.random() * 256);
 	return "rgb(" + r + ", " + g + ", " + b + ")";
}


