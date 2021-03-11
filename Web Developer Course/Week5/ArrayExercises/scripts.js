
//adds an item to the end of an array
const addToArray= ((array, item ) =>{
   return array.concat(item);
});

let arrayAdd = [1,2,3];
arrayAdd = addToArray(arrayAdd, 4);
//expected[1, 2, 3, 4]
console.log(arrayAdd);

//remove last element of an array1
const removeFromArray = ((array) =>{
    array.pop();
    return array;
});
let arrayRemove = [1, 2, 3];
arrayRemove = removeFromArray(arrayRemove);
//expected[1,2]
console.log(arrayRemove);

//adds an item to the beginning of an array1
const addToBeginning = ((array, item) =>{
  array.splice(0, 0, item);
  return array;
});
let arrayAddBegin = [1,2,3];
arrayAddBegin = addToBeginning(arrayAddBegin, 5);
//expected[5, 1, 2, 3]
console.log(arrayAddBegin);

//removes an item from the beginning
const removeFromBeginning = ((array) => {
  array.splice(1);
  return array;
});
let arrayRemoveBegin = [1,2,3];
arrayRemoveBegin =  removeFromBeginning(arrayRemoveBegin);
//expected[1]
console.log(arrayRemoveBegin);

//takes in array string string and returns the chunk that is between those strings inclusive
const returnChunk = ((array, string1, string2) => {
let arrayReturn = [];
var start = array.indexOf(string1);
var end = array.indexOf(string2);
if(start == false || end == false){
  return false;
}
var i = 0;
for(start; start <= end; start++){
  arrayReturn.push(array[start]);
  i++;
}
return arrayReturn;
});

let arrayChunk = [1,2,3,4,5,6];
arrayChunk = returnChunk(arrayChunk, 2, 4);
//expected[2,3,4]
console.log(arrayChunk);

arrayChunk = returnChunk(arrayChunk, 2, "hi");
//expected false
console.log(arrayChunk);

//takes in an array of nmbers and retun value
const sumValue = ((array) => {
  var sum = 0;
  array.forEach((item) =>{
    sum += item;
});
return sum;
});

arrayNums = [1,2,3];
console.log(sumValue(arrayNums));

const joinStrings = ((array, string) => {
  return array.map(item => string + item);
});

console.log(joinStrings(["a","b","c"], "letter: "));
