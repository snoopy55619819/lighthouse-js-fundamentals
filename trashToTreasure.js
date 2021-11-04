//Track which type garbage is thrown out.
const smartGarbage = function (trash, bins) {
  // Your code in here ...
  bins[trash] += 1;
  return (bins);
}


//Test:
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

/* Expected output:
{
  waste: 4,
  recycling: 3,
  compost: 5
}
*/