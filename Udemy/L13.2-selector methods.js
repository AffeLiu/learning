document.getElementById()
Takes a string argument and returns the one element with a matching ID


document.getElementsByClassName()
Takes a string argument and returns a list of elements that have a matching class


document.getElementsByTagName()
Returns a list of all elements of a given tag name, like <li> or <h1>


document.querySelector()
Returns "the first" element that matches a given CSS-style selector
var tag = document.querySelector(".bolded");
var tag = document.querySelector("h1");

document.querySelectorAll()
Returns a list of elements that matches a given CSS-style selector
var tag = document.querySelector("h1");




css 跟 js 負責的部分分開：


//INSTEAD OF THIS:
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";


/*DEFINE A CLASS IN CSS*/
.some-class {
  color: blue;
  border: 10px solid red;
}


JS:
var tag = document.getElementById("highlight");
//ADD THE NEW CLASS TO THE SELECTED ELEMENT
tag.classList.add("some-class");


//ADD A CLASS TO THE SELECTED ELEMENT
tag.classList.add("another-class");

//REMOVE A CLASS
tag.classList.remove("another-class");

//TOGGLE A CLASS 切換 
tag.classList.toggle("another-class");