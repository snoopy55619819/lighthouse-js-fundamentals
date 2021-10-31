/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */


// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(numLines) {
  let triangle = "";
  for (let i = 1; i <= numLines; i++) {
      triangle += makeLine(i);
  }
  return triangle.slice(0,-2);
}

// test your code by uncommenting the following line
console.log(buildTriangle(15));