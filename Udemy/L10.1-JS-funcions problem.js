// isEven

function isEven(number){
	if (number%2===0) {
		return true;
	}
	return false;
}


// factorial


function factorial(number){
	if (number<0)
	return ("error")
	if (number == 0 || number == 1)
    return 1;
  	if (number<0)
	return factorial(number-1)*number;
}

another ans:

function factorial(number){
	var result=1;
	for (var i=1; i<=number; i++){
		result = result*i  
	}
	return result;
}

//可以寫成 result *=i 



// kebabToSnake

function kebabToSnake(str) {
	var newStr=str.replace(/-/g,"_"); 
	return newStr;
}


