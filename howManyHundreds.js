//Calculate how many bottles of 100 are possible.
const howManyHundreds = function(numOfBottles) {
  return Math.floor(numOfBottles / 100);
}

howManyHundreds(100);
//Output: 1

howManyHundreds(99);
//Output: 0

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);