// var answer=prompt("Are we there yet?");


// while (answer!=="yes") {
// 	var answer=prompt("Are we there yet?");
// }

// // 上面的loop沒有跑完就不會進到alert

// alert("YAY, We made it!")



// 若要讓答案中包含yes即可的寫法：

var answer=prompt("Are we there yet?");


while (answer.indexOf("yes") === -1) {
	var answer=prompt("Are we there yet?");
}

// 上面的loop沒有跑完就不會進到alert

alert("YAY, We made it!")
