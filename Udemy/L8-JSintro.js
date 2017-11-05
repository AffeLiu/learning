JavaScript 的型態
*Number （數字）
*String （字串）
*Boolean （布林）
*Object （物件）
	Function （函式）
	Array （陣列）
	Date （日期）
	RegExp
*Null （空）
*Undefined （未定義）




基本用法：

typeof sth 可以查找他的型態

*Number （數字）：可＋－＊／  ％為餘數  10%3 = 1

*String （字串）：可相加 雙引號單引號皆可，但不可混用
				backslash \ 為escape characters 可將特殊符號如雙引單引號排除於系統命令之外 當成字串顯示
				下一個字會在但\本身會不見。
				// ex: "hi \"goodbye\" " －－－> "hi "goodbye" "


				計算字串長度 從１開始算
				"good bye".length ＝８ (空白鍵也會計算計進去)

				顯示字串之第n個數 從０開始算

				"hello"[0] ＝０

*Boolean 
true false

> >= < <= 大於 大於or等於 小於 小於or等於
==  equal to
!=  not equal to
=== equal value and type
!== not equal value or equal type

&& and || or ! not

value也繼承了其特性 分為 truthy and falsy

falsy value: false 0 "" null undefined NaN

true=="1" (true)  0==false (true)

null==undefined (true)  NaN == NaN (false)

var x=99 
x=="99" (true) x==="99" (false)

var y=null
y==undefined (true) y===undefined (false)

*undefined and null

undefined 意思是變數沒有被宣告，或者是已經宣告了，但是沒有賦值。
null 意思是「沒有值」的值。
Javascript 將未賦值的變數的預設值設為 undefined。
Javascript 從來不會將值設定為 null。這是讓開發者用來宣告 var 是沒有值的。
undefined 不是一個有效的 JSON，而 null 是有效的。
undefined 的類型（typeof） 是 undefined。



var：

//Variables are simply containers that store values
//They follow this pattern:
var yourVariableName = yourValue;

//They can store all of the values we've seen
var name = "Rusty";
var secretNumber = 73;
var isAdorable = true;

//Recall the stored value by calling the variable name
var name = "Rusty";
"hello there " + name    //"hello there Rusty"

var num = 37;
num + 3 + 10    //50

//We can also update existing variables
var name = "Robert";
name = "Bob";

console.log( 只出現在console層 查找一個函數的值)

prompt("") 視窗秀出一個可輸入值的函數 回傳的值是“字串”

alert("") 視窗彈出一段訊息


JS可以隨意地將var的value從數字轉成字串沒問題

JS 使用 camelCase 以識別命名時多單字組成的易讀性
另外還有幾種case：snack_case kebab-case



*if (true) {}
if or else if 後面才可接條件 else 後面不行。

*while loops (some condition) {

}
很像if 但他會一直repeat if 這只會run一次


var str="hello";

var count= 0;

while (count < str.length) {
console.log(str[count]);
count++;
}


*for loops 

for(var count=1; count<6; count++){
	console.log(count);
}

改寫成 while

var count=1;

while (count<6){
	console.log(count);
	count++;
}


使用 indexof 函數查找某質中是某包含某些值

indexOf() 方法對大小寫敏感！
如果要檢索的字符串值没有出現，則該方法得到 -1。
var str="Hello world!"
str.indexOf("Hello") 0 從第零個位置開始這個字
str.indexOf("World")-1 沒有
str.indexOf("world") 6   第六個



*function 可以儲存程式碼的函數

function (sth) {
	console.log(hi)
}

要用的時候：function();


想要看這個函數後面所存的code: function


分為兩種方式 "function declaration" and "function expression"

//function declaration
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//function expression
var capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

*return
often we want a function to send back an output value

return可以下很多個 但一個function只會回傳一個return結果
（最優先的） *使用if 的話會全部跑完。

ex:

funtion test(x) {
	return x*2       \\只會執行這一個
	console.log(x);
	return x*2;
}

test(40);


return可以是一個值一個結果 return x*2; 
也可以直接用來判定 true false return= n%2===0 ; 等式成立就是true



*scope:範圍
Javascript會在查找變數時，會循著範圍鏈（Scope chain）一層一層往外找
使用var所宣告的變數，作用範圍是在當時所在環境，
不使用var直接指定值而建立的變數，則是全域物件上的一個特性，也就是俗稱的全域範圍。

每個function 都有自己的scope不互相共享 

在function 裡定義的var 放到全域上會變成undefined


從一個function呼叫另外一個function的方法：
*setInterval 可按指定的週期調用指定函數
ex:

function sing(){
	console.log("haha")
}

setInterval(sing,2000) (調用的函數,n百萬分之一秒)
sing後面不用括號是因為我們不是直接叫出這函數，而是給setIerval去使用這函數。

當然也可以直接把調用的函數寫在setIerval裡面

setInterval(function sing(){
	console.log("haha")
},2000)


*Array 陣列
JavaScript 中，全域物件 Array 是陣列的建構子，陣列是高階、似列表的物件。

var friend1 = "Charlie";
var friend2 = "Liz";
var friend3 = "David";
var friend4 = "Mattias";

------------Array---------------

var friends = ["Charlie", "Liz", "David", "Mattias"];

取用：friends[0]"Charlie"  friends[0][0]="C"
// 增加：friends[4]"Mary" 即可將mary增加到friends裡去
應該使用 push函數 

friends.push("Mary","Bob") (這樣就可以不用再計算到底是第幾個)

//We can initialize an empty array two ways:
var friends = []; //no friends :(
var friends = new Array() //uncommon

格式可以不同
var random_collection = [49, true, "Hermione", null];

一樣可以計算長度
var nums = [45,37,89,24];
nums.length = 4



push/pop

pop() 方法是用來移除陣列的最後一個元素並回傳該元素。此方法改變了陣列的長度。
push() 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。

shift/unshift
shift() 方法 (method) 會從陣列移除第一個元素 (element)，並回傳該元素。此方法會改變陣列的長度。
unshift() 方法 (method) 增加一個或多個元素 (element) 到陣列的開頭，並回傳新陣列的長度。

indexOf
indexOf() 方法會回傳"第一個"找到的元素索引，若沒找到則回傳 -1。

slice
slice()方法用來將A 陣列的元素 複製到 B 陣列

slice(begin, end) end 不會被算進去 
只填begin會直接複製到最後一個元素
()都不填，就會複製全部
