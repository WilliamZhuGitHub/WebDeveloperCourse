// const joke = require('one-liner-joke');

// console.log(joke.getRandomJoke());

/*
{
    firstname,
    lastname,
    state,
    state abrv,
    ccnumber,
    ccexpiration
}
*/


const { first_name, last_name } = require('casual');
const casual = require ('casual');

let people = [];

for(let i = 0; i < 20; i++){
    people.push({
        firstName: casual.first_name,
        lastName: casual.last_name,
        state: casual.state,
        ccNumber: casual.card_data,
     })
}

console.log(people);
// let people = [];

// for(let i = 0; i < 20; i++){
//     people.push(casual.full_name);
// };

// console.log(people);

 