//Determine which school learners should go attend based on age.
const whichSchool = function (age) {
  if (age < 13) {
    return ("Elementary School");
  } else if (age >=13 && age <= 18) {
    return ("Secondary School");
  } else {
    return ("Lighthouse Labs");
  }
}

/* Testing code with edge cases:
console.log(whichSchool(10));//Output: 'Elementary School'
console.log(whichSchool(13));//Output: 'Secondary School'
console.log(whichSchool(15));//Output: 'Secondary School'
console.log(whichSchool(18));//Output: 'Secondary School'
console.log(whichSchool(20));//Output: 'Lighthouse Labs'
*/
