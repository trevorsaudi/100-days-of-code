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


	function* gen() {
	/*

		yield console.log("pear");
		yield console.log("banana");
		yield console.log("apple");
		console.log("all done");

		*/


		var x = yield "pear";
		var y = yield "apple";
		var z = yield "banana";

			return x + y + z

	}
	var myGen = gen();
	console.log(myGen.next());
	console.log(myGen.next(10));
	console.log(myGen.next(5));
	console.log(myGen.next(3));

	/*
	myGen.next();
	myGen.next();
	myGen.next();
	myGen.next();
	*/


}
