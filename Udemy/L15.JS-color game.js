
var numsquare = 6;
var colors = generateRandomColors(numsquare);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay= document.getElementById("message")
var h1 = document.querySelector("h1")
var resetButton = document.getElementById("reset")
var easyButton = document.getElementById("easyButton")
var hardButton  = document.getElementById("hardButton")


easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected")
	hardButton.classList.remove("selected")
	numsquare = 3
	colors = generateRandomColors(numsquare)
    //pick a new random color from array
    pickedColor = pickColor()
    //change colorDisplay
    colorDisplay.textContent = pickedColor
    //change colors of squares
    for (var i = 0; i < square.length; i++) {
    	if(colors[i]){
		square[i].style.backgroundColor = colors[i]
		}
		else{
		square[i].style.display = "none"
		}
}	
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLORS"
	messageDisplay.textContent = "";
})


hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected")
	easyButton.classList.remove("selected")
	numsquare = 6
	colors = generateRandomColors(numsquare)
    //pick a new random color from array
    pickedColor = pickColor()
    //change colorDisplay
    colorDisplay.textContent = pickedColor
    //change colors of squares
    for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i]
	square[i].style.display = "block"
}	
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLORS"
	messageDisplay.textContent = "";
})


colorDisplay.textContent = pickedColor

resetButton.addEventListener("click", function(){
	//generate all new colors
    colors = generateRandomColors(numsquare)
    //pick a new random color from array
    pickedColor = pickColor()
    //change colorDisplay
    colorDisplay.textContent = pickedColor
    //change colors of squares
    for (var i = 0; i <square.length; i++) {
	square[i].style.backgroundColor = colors[i]
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
});

for (var i = 0; i <square.length; i++) {
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

