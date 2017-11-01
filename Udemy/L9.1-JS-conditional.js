var age=Number(prompt("How old are you?"))
// Get age and convert it to a Number (prompt always returns a String)

if(age<0) {
	console.log("error!!");
}

else if(age===21) {
	console.log("happy 21st birthday");
}

else if (Math.sqrt(age)%1===0) {
	console.log("pefert square");
}

else if (age%2===1) {
	console.log("your age is odd");
}

else {
	console.log("you are" + age + " years old")
}

