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

CSS:
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

---------------------------------------------------
*textContent
Returns a string of all the text contained in a given element

<p>
  This is an <strong>awesome</strong> paragraph 
</p>

/Select the <p> tag:
var tag = document.querySelector("p");

//Retrieve the textContent:
tag.textContent //"This is an awesome paragraph"

//alter the textContent:
tag.textContent = "blah blah blah";
純文字 更改也只會顯示純文字 語法無效


*innerHTML
Similar to textContent, except it returns a string of all the HTML contained in a given element

能顯示出有html的地方，當然修改時也能加入html的語法


*Attributes
Use getAttribute() and setAttribute() to read and write attributes like src or href

<a href="www.google.com">I am a link</a>
<img src="logo.png">

var link = document.querySelector("a");
link.getAttribute("href");  //"www.google.com"
//CHANGE HREF ATTRIBUTE
link.setAttribute("href","www.dogs.com"); 
///<a href="www.dogs.com">I am a link</a>

//TO CHANGE THE IMAGE SRC
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="corgi.png">
