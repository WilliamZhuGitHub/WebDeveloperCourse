// fetch("url")
// //.then happens chronologically 
// .then((data) => {
//     //must return so it doesn't return as undefined
//     return data.toUpperCase()    
// })
// .then((data)=> {
//     return data.split(",")
// })
// .then(()=> {

// })
// //catch will only catch then the url is invalid 
// .catch((err) => {})

const fetch = require('node-fetch')

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        //convert to json to javascript object with .json 
        return response.json()
    })
    .then((response) => {
        console.log(response[0].name);
    })
    .catch((err) => {
        console.log(err);
    });