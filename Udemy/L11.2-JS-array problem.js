//printReverse 1



function printReverse(array){
	for (i=array.length-1; i>=0; i--) {
	console.log(array[i]);
	}
}


//isUniform

function isUniform(array){
	var first=array[0];
	for(i=1; i<array.length; i++){
		if(array[i]!== first){
		return false; 
		// return的值只會出現一次
		}
	}	
	return true;
}

-------------不建議的寫法 會錯！
function isUniform(array){
	var first=array[0];
	array.forEach(function(el){
		if(el!== first){
		return false; 
		// return的值只會出現一次 這個return只會做用到forEach後的function
		}
		});
	return true;
}



//sumArray

function sumArray(array){
	var total=0
	for (i=0;i<=array.length-1;i++){
	total += i
	}
	return total
}


function sumArray(array){
	var total=0
	array.forEach(function(el){
	total += el
	});
return total
}


//max

function max(array){
	var big=array[0];
	for(i=1; i<=array.length; i++){
		if(big < array[i]){
		 var big=array[i]
		}
	}
console.log(big)
}