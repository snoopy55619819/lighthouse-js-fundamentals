//Calculate individual's age.
const ageCalculator = function(name, yearOfBirth, currentYear) {
  return (name + " is " + (currentYear - yearOfBirth) + " years old.");
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

//Ouput: "Suzie is 32 years old."