
console.log("-10to19")

var number=-10;

while (number<=19) {
	console.log(number);
	number++;
}



console.log("even 10to40")

var number=10;

while (number<=40) {
	console.log(number);
	number+=2;
}



console.log("odd 300to333")

var number=300;

while (number<=333) {
	if (number%2!==0) {
		console.log(number);
	}	
number++;
}



console.log("didBy5&3 5to50")

var number=5

while (number<=50) {
	if (number%15===0) {
		// (number%3===0 && number%5===0)
		console.log(number);
	}
number++;
}
