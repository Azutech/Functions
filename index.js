
/**
 * 
 * 1. Declare a function called laugh() that returns "hahahahahahahahahaha!". Print the value returned from the laugh() function to the console.

 */
function laugh(){
 let laughOut="hahahahahahahahahaha"  
return laughOut;
}
console.log(laugh());





/**
 * Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

 */

 function laugh(num) {
    let laughing = ""
    for (let i = 0; i < num; i++){
        laughing +="ha"
    }
    return laughing + "!"
   
   }
   laugh(2);





   /**
    *  For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle.
    */

    function buildTriangle(side){
  let base=""
  for (let i = 0; i < side; i++){
    base += "* "
    console.log(base + "\n")
     
  }
}
buildTriangle(10)





/***
 *Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
laugh(3);
 
 
 */



let laugh = function(b){
  let laughout = "";
  for (let i = 0; i < b; i++){
    laughout += "ha"
  }
  return laughout + "!"
}
console.log(laugh(3))

/**
 * Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:
cry();
Returns: boohoo!

 * 
 */


var cry = function arrrh (){
var crying = "boohoo!"
console.log(crying)
}
cry()

/**
 * Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.
emotions("happy", laugh(2));
 */


function emotions(myString, myFunc){
  console.log("I am " + myString + ", " + myFunc(2))
}

emotions("happy", function myFunc(num) {
  let smile = "";
  for(let i = 1; i <= num; i++) {
    smile += 'ha';
  }
  return smile + '!';
  
} )

emotions();