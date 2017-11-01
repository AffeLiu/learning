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

Number （數字）：可＋－＊／  ％為餘數  10%3 = 1

String （字串）：可相加 雙引號單引號皆可，但不可混用
				backslash \ 為escape characters 可將特殊符號如雙引單引號排除於系統命令之外 當成字串顯示
				下一個字會在但\本身會不見。
				// ex: "hi \"goodbye\" " －－－> "hi "goodbye" "


				計算字串長度 從１開始算
				"good bye".length ＝８ (空白鍵也會計算計進去)

				顯示字串之第n個數 從０開始算

				"hello"[0] ＝０



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


JS可以隨意地將var的value從數字轉成字串沒問題

JS 使用 camelCase 以識別命名時多單字組成的易讀性
另外還有幾種case：snack_case kebab-case

