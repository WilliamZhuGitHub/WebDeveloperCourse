/*
function tellFortune(children, partner, location, jobTitle){
   console.log("You will be a " + jobTitle + " in " + location + ", married to " + partner + " with " + children + " kids.");
}
*/
const tellFortune = (children, partner, location, jobTitle) =>{
  console.log("You will be a " + jobTitle + " in " + location + ", married to " + partner + " with " + children + " kids.");
}

tellFortune(4, "partner", "loc", "job");

/*
function calcCircle(circleRaidus){
  var circumrence = circleRaidus * 2;
  var area = 3.14*(circleRaidus^2);
  area = Math.round(area * 100) / 100
  console.log("The circumrence = " + circumrence + ", and the area is " + area);
}
*/
const calcCircle = (circleRaidus) =>{
  let circumrence = circleRaidus*2;
  let area = 3.14* circleRaidus^2;
  area = Math.round(area *100)/ 100;
  console.log("The circumrence = " + circumrence + ", and the area is " + area);
}

calcCircle(15);
/*
function basicMath(arg1, arg2, op){
  if(Number.isInteger(arg1) == false || Number.isInteger(arg2) == false ||
  op != "add" && op != "subtract" && op != "multiply" && op != "divide"){
  return "input error";
}

  if(op == "add"){
    return arg1 + arg2;
  }
  if(op == "subtract"){
    return arg1 - arg2;
  }
  if(op == "multiply"){
    return arg1 * arg2;
  }
  if(op == "divide"){
    if(arg2 == 0){
      return "cannot divide by 0";
    }
    return arg1 / arg2;
  }
}
*/

const basicMath = (arg1, arg2, op) => {
  if(Number.isInteger(arg1) == false || Number.isInteger(arg2) == false ||
  op != "add" && op != "subtract" && op != "multiply" && op != "divide"){
  return "input error";
}

  if(op == "add"){
    return arg1 + arg2;
  }
  if(op == "subtract"){
    return arg1 - arg2;
  }
  if(op == "multiply"){
    return arg1 * arg2;
  }
  if(op == "divide"){
    if(arg2 == 0){
      return "cannot divide by 0";
    }
    return arg1 / arg2;
  }
}


console.log(basicMath(1, 1, "add"));
console.log(basicMath(1, 1, "subtract"));
console.log(basicMath(1, 1, "multiply"));
console.log(basicMath(1, 0, "divide"));
console.log(basicMath(1, 0, "dividedd"));
console.log(basicMath("aa", 0, "divide"));

/*
function randomizer(min, max){
  if(Number.isInteger(min) == false || Number.isInteger(max) == false  ||
  min == max){
    return "input error";
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}
*/
console.log(randomizer(4, 10));


const randomizer = (min, max) => {
  if(Number.isInteger(min) == false || Number.isInteger(max) == false  ||
  min == max){
    return "input error";
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomizer(4, 10));
