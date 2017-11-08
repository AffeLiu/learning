var click = document.querySelector("button");
var body = document.querySelector("body")
var ispink = false

click.addEventListener("click",change)

function change(){
body.classList.toggle("pink");
}


// function change(){
 
//  if (ispink) {
//  	body.style.background = "white"
//  	ispink = false;
//  }

//  else {
//  	body.style.background  = "pink"
//  	ispink = true;
//  }
// // 也可以直接在這寫上 ispink =! ispink;
// }


