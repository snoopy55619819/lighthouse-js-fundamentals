/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


//Set num to 5 for code testing purposes.
var num = 5;

//Loop from 99 to 1 and print out lines of song.
while (num > 0) {
  //Edge case for num = 1 requires 'bottle' to not be plural.
  if(num === 1) {
       console.log("1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!");
  } else if (num === 2) { // edge case for num = 2 also requires 'bottle' to not be plural.
       console.log("2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!");
  } else {
      console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num - 1} bottles of juice on the wall!`);
  }
  num = num - 1; //Increment down by 1.
}
