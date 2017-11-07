var movieDB=[
	{
	name:"Forrest Gump",
	rating:8.8,
	seen:true
},
	{
	name:"The Dark Knight",
	rating:9.0,
	seen:false
},
	{
	name:"The Lion King",
	rating:8.5,
	seen:true
},
	{
	name:"STAR WARS",
	rating:7.9,
	seen:false
}
];



for (var i = 0; i<=movieDB.length - 1; i++) {
	if (movieDB[i].seen) {
		console.log("You have watched "+ "\""+ movieDB[i].name + "\"" +"-" + movieDB[i].rating)
	}
	else {
		console.log("You have not seen "+ "\""+ movieDB[i].name + "\"" + "-" + movieDB[i].rating)
	}
}



---------------------------------------------


movieDB.forEach(function(movie){
	var result = "You have"
	if(movie.seen) {
		result += " watched"
	}
	else{
		result += "not seen"
	}
	result += "\"" + movie.name  + "\"";
	result += " -" + movie.rating;
	console.log(result)
});

--------------------------------------------

function list(movie){
	var result = "You have"
	if(movie.seen) {
		result += " watched"
	}
	else{
		result += "not seen"
	}
	result += "\"" + movie.name  + "\"";
	result += " -" + movie.rating;
	return result;
};

movieDB.forEach(function(movie){
	console.log(list(movie))
	});

