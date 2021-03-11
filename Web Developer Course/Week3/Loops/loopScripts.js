//whileloops
let loopOne = -7

console.log("Loop 1");
while(loopOne <= 24){
  console.log(loopOne);
  loopOne += 1;
}

let loopTwo = 4
console.log("Loop 2");
while(loopTwo <= 30){
  console.log(loopTwo);
  loopTwo +=2;
}

let loopThree = 4001
console.log("Loop 3");
while(loopThree < 4037){
  console.log(loopThree);
  loopThree +=2;
}

let loopFour = 5;
console.log("Loop 4");
while(loopFour <= 60){
  if((loopFour%5) == 0 && (loopFour%3) == 0){
    console.log(loopFour);
  }
  loopFour +=1;
}

console.log("For 1");
for(let i = -7; i <= 24; i++){
  console.log(i);
}

console.log("For 2");
for(let i = 4; i<=30; i+=2){
  console.log(i);
}

console.log("For 3");
for(let i = 4001; i <4037; i+=2){
  console.log(i);
}

console.log("For 4");
for(let i = 5; i <= 60; i++){
  if(i%5 == 0 && i%3 ==0){
    console.log(i);
  }
}




console.log("Done");
