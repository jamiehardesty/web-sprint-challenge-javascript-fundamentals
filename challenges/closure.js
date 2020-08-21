// no stretch here! move on!
//
// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// nestedFunction can access internal because the function is looking outside its scope to access that variable. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(counter){
  let arr = [];
  let sum = 0;
  let param = 0;
  for (let i = 0; i < counter; i++){
    sum += param++;
    arr.push("These are to be added together: " + param);
  }
  arr.push("This is the total return matching Number('ten') as specified: " + (sum += param));
  return arr;
}
console.log(summation(4)); // 1, 2, 3, 4 = 10 