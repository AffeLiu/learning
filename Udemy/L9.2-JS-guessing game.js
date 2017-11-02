// creat the secertNumber
var number=7;

// ask user for guess
var guess=Number(prompt("Take a guess!"));

// check if guess is right
if (number===guess) {
	alert("You got it!");
}

// check if guess is lower
else if (guess<number) {
	alert("Too low. Guess again!");
}

// check if guess is higher
else if (guess>number) {
	alert("Too high. Guess again!");
}

// if or else if 後面才可接條件 else 後面不行。





