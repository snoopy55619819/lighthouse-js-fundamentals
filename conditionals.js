const temperature = 112;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!")
} else {
  console.log("Short sleeves are fine");
}


const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature >40) {
  console.log("Maybe going outside is not such a great idea...");
}

const raining = false;

if (!raining) {
  console.log("Leave your umbrella at home!");
}
