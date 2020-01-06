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
