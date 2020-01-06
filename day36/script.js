/* constants
 window.onload = function(){

const pi = 3.142;
console.log(pi);

function areaCirc(r){

	console.log("The area is: " + pi * r * r);

}
areaCirc(5)
	
}
*/

/*
the let keyword

window.onload = function(){

var items = document.getElementsByTagName("li");

for (let x =  0; x < items.length; x++){

	items[x].onclick = function(){
		console.log(x)
	}
}

}
*/

/*
default parameter
window.onload = function(){

	function logPerson(name, belt, age=25){

		console.log("My name is "+ name + 
					" and my belt color is "+ belt+
					" and my age is "+ age);




	}

	logPerson("trevor","black");



}

*/

/*

spread operator
window.onload = function(){

	var nums = [3,4,5];

function addNum(a,b,c){

console.log(a+b+c);

}


addNum(...nums);
}


*/


/*

window.onload = function(){

	function logPerson(name,age){

		console.log(`my name is ${name} and my age is ${age}`);

	}

logPerson("Saudi", 20);


}

*/

/*
object literal enhancements

window.onload = function(){

	 var name = "Crystal";
	 var belt = "Black";

	 var ninja = {
		name, belt,
			chop (x){

			console.log(`you chopped the enemy ${x} times`);
		}

	 };

console.log(ninja.chop(5));



}

*/
/* 
new functions

window.onload = function(){


var str = "heeeeeey";
//console.log(str.repeat(5)) repeating strings a number of times

var youSay = "goodbye";

console.log(str.endsWith("eee"));

}



window.onload = function(){


var youSay = "goodbye";

if (youSay.startsWith("goodbye")){
	var iSay = "hello";
}

console.log(`you say ${youSay}, I say ${iSay}`)
}



window.onload = function(){


	var test = "My name is trevor";
	console.log(test.includes("names"));

}

*/
/* 
arrow functions

window.onload = function(){


var ninja  = {
	name: "Saudi ",
	chop(x){

			var _this = this;


			window.setInterval(() =>{


						if (x>0){
							console.log(_this.name + "chopped the enemy");
							x--;
						}
			}, 1000);
}


}

ninja.chop(5);
}

*/

/* Sets 

window.onload = function(){


	var persons = ["Shawn", "Trevor", "Hikaru", "Hikaru"]

	var refinedPersons = new Set(persons)
	console.log(refinedPersons)

	persons = [...refinedPersons]
	console.log(persons)


}
*/

window.onload = function(){






}