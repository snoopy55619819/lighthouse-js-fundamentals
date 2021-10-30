//LoopyLighthouse problem. Loop through numbers 100-200 and print messages.
for(let i = 100; i <= 200; i++) {
  if (i % 3 === 0 && i % 4 === 0) { //If divisible by 3 & 4, print 'LoopyLighthouse'
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) { //If divisible by 3 print 'Loopy'
    console.log("Loopy");
  } else if (i % 4 === 0) { //If divisible by 4, print 'Lighthouse'
    console.log("Lighthouse");
  } else { //Print number for rest of cases.
    console.log(i);
  }
}