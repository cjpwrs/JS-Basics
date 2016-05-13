//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
function isTyler(name){
	if(name === 'Tyler'){
		return true;
	}
	else {
		return false;
	}
}
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName(){
  	return prompt("What is your name?")
  }


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome(){
  	var name = getName();
  	alert("Welcome, " + name);
  }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  //arguments are the actual value/variable that is being passed in, 
  //whereas a paremeter simply specifies how the function will interact with that argument


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  //0, NaN, false, undefined, null, ""


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  var myName = function(){
  	return "CJ";
  }
  


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  newMyName = myName;

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn(){
  	return function(){
  		return "CJ";
  	}
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code 
  var innerFn = outerFn();

//Now invoke innerFn.
