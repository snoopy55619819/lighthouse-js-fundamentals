//Create array between range of start to end incrementing by step anount.
function range(start, end, step) {
  let rangeArray = [];
  //If invalid input, return empty array.
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return rangeArray;
  } else { //Loop from start to end and add values to rangeArray.
    while (start <= end) {
      rangeArray.push(start);
      start += step;
    }
  }
  //Return the final array of range values.
  return rangeArray;
}

//Tests:
console.log(range(0, 10, 2));//Output: [0, 2, 4, 6, 8, 10]
console.log(range(10, 30, 5));//Output: [10, 15, 20, 25, 30]
console.log(range(-5, 2, 3));//Output: [-5, -2, 1]