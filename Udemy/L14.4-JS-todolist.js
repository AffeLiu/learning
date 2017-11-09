var list = document.querySelectorAll("li");


for (var i = 0; i <= list.length - 1; i++) {
	list[i].addEventListener("mouseover", function(){
	this.classList.add("selected")
});


	list[i].addEventListener("mouseout", function(){
	this.classList.remove("selected")
});

	list[i].addEventListener("click", function(){
	this.classList.toggle("done");
});
}





