var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var reButton = document.getElementById("re");

var p1score = document.getElementById("p1score");
var p2score = document.getElementById("p2score");

var limit = document.querySelector("input")
var playing = document.querySelector("p span");

var p1Score= 0;
var p2Score= 0;
var winningScore = 5;
var gameover = false;


limit.addEventListener("change" , function(){
 playing.textContent= limit.value;
 winningScore = Number(limit.value)
 reset()
});


p1Button.addEventListener("click" , function(){
	if(!gameover){
	p1Score++;
	if(winningScore===p1Score){
	p1score.classList.add("winner");
	gameover = true;
	}
	p1score.textContent=p1Score
	}
});


p2Button.addEventListener("click" , function(){
	if(!gameover){
	p2Score++;
	if(winningScore===p2Score){
	p2score.classList.add("winner");
	gameover = true;
	}
	p2score.textContent=p2Score
	}
});


reButton.addEventListener("click" , function(){
	reset();
});


function reset(){
	p1score.textContent= 0;
	p2score.textContent= 0;
	p1Score= 0;
	p2Score= 0;
	p1score.classList.remove("winner");
	p2score.classList.remove("winner");
	gameover = false;
};

//change 只要有變更就能啟動event


