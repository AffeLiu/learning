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



*object
不像array一樣有順序，他就只是個物件，存放於對應的特性中。

var person = {
	name: "cindy",
	age: 32,
	city: "Missoula"	
};

呼叫物件的方式有兩種 

person.name    &    person(["name"])
第一種方式雖然方便，但侷限在於物件名開頭不能是數字，整個字串不能有空格

更改物件：
只需要在後面輸入新的值即可
person.name = "mary"

