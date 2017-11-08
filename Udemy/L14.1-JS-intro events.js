html:

<button>Click Me</button>
<p>No One Has Clicked Me Yet</p> 
<ul>
  <li>mary</li>
  <li>bob</li>
  <li>john</li>
</ul>

---------------------------------------------
JS:

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//SETUP CLICK LISTENER
button.addEventListener("click", function() {
  paragraph.style.background = "orange";
});

// 把function分開來寫，這樣其他地方也能用這函數
paragraph.addEventListener("click", clicked)
function clicked(){
paragraph.textContent = "CLICKED!!";}




var lists=document.querySelectorAll("li");

for(i=0; i<lists.length ; i++){
  lists[i].addEventListener("click",function(){
    this.style.color = "pink"
  });
};