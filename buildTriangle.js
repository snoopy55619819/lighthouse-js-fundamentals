/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */


//Create a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

//Create a triangle by concating lines of * as a string.
function buildTriangle(numLines) {
  let triangle = "";
  for (let i = 1; i <= numLines; i++) {
      triangle += makeLine(i);
  }
  return triangle.slice(0,-2); //Remove last '\n' characters and return completed triangle.
}

//Tests:
console.log(buildTriangle(10));
//Output:
/*
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * *
*/