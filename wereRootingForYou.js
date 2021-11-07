const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

//Determine winning submitter based on metric.
const judgeVegetable = function (vegetables, metric) {
  let currentWinner = "No one won";
  let winningMetricAmount = 0;

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > winningMetricAmount) {
      currentWinner = vegetables[i].submitter;
      winningMetricAmount = vegetables[i][metric];
    }
  }
  return currentWinner;
};


console.log(judgeVegetable(vegetables, metric));
//Output: "Old Man Franklin"
