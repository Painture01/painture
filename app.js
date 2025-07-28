console.log("hey :0");


alert("welcome <3");
let name = "Painture";
console.log(name, " was here :)");
let urname = prompt("What's ur name?");
alert("Hey "+urname, ":D");
let title = document.getElementById("title");
title.innerText = "Welcome "+ urname;
if (urname == "Sirina") {
	alert("Same!!!");
	title.style.color = "teal";
}
else {
	title.style.color = "white";
}