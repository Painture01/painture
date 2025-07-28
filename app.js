console.log("anticonstitutionnellement");
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



let age = prompt("How old r u?")

if (age >= 14) {
	alert("welcome to JIT")
} 
else {
	alert("Come back in a few years")
}




const timestamp = Date.now();

const currentDate = new Date(timestamp);

//Formatting date 
const formattedDate = currentDate.toLocaleString();
alert(`Current Date and Time: ${formattedDate}`);