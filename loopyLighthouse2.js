//LoopyLighthouse2 problem. Input a range, multiples and words to play LoopyLighthouse2!
//range: [a, b] => start and end range numbers
//multiples: [c, d] => choice of 2 numbers used as multiples
//words: ['e', 'f'] => 2 strings that are used as outputs if numbers in range are multiples.

function loopyLighthouse(range, multiples, words) {
  //Define constants used within the block scope only.
  let startRange = range[0];
  let endRange = range[1];
  const multiple1 = multiples[0];
  const multiple2 = multiples[1];
  const word1 = words[0];
  const word2 = words[1];

  for(let i = startRange; i <= endRange; i++) {
    //If number is divisible by both multiples, print word1 + word2
    if (i % multiple1 === 0 && i % multiple2 === 0) {
      console.log(word1 + word2);
    } else if (i % multiple1 === 0) { //If divisible by multiple1 print word1
      console.log(word1);
    } else if (i % multiple2 === 0) { //If divisible by multiple2, print word2
      console.log(word2);
    } else { //Print number if not divisible by multiple1 or multiple2
      console.log(i);
    }
  }
}


//Example imput:
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);