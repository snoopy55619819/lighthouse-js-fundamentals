//Nikhil Tallapureddy
//Refactored for W1D1 problem set.
//LoopyLighthouse2 problem. Input a range, multiples and words to play LoopyLighthouse2!
//range: [a, b] => start and end range numbers
//multiples: [c, d] => choice of 2 numbers used as multiples
//words: ['e', 'f'] => 2 strings that are used as outputs if numbers in range are multiples.

const loopyLighthouse = function(range, multiples, words) {
  //Define constants used within the block scope only.
  const startRange = range[0];
  const endRange = range[1];
  const multiple1 = multiples[0];
  const multiple2 = multiples[1];
  const word1 = words[0];
  const word2 = words[1];

  for (let i = startRange; i <= endRange; i++) {
    //Print output based on divisibility rules of games
    console.log(i % multiple1 === 0 && i % multiple2 === 0 ? word1 + word2 :
      (i % multiple1 === 0 ? word1 :
        (i % multiple2 === 0 ? word2 : i)));
  }
};

//Example imput:
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
