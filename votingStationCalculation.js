//Input array of possible voting stations and print names of eligible voting stations.
function chooseStations(stations) {
  let stationsPassed = [];
  //Loop through all possible stations.
  for (let i = 0; i < stations.length; i++) {
    //Determine if station is eligible.
    if (stations[i][1] >= 20 && (stations[i][2] === 'school' || stations[i][2] === 'community centre')) {
      stationsPassed.push(stations[i][0]); //Add eligible stations to stationsPassed array.
    }
  }
  return (stationsPassed);//Return final list of appropriate voting stations.
}

//Array of possible/raw voting stations.
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);//Pass chooseStations with stations to determing appropriate voting stations.
//Output: ['Bright Lights Elementary', 'Moose Mountain Community Centre']

