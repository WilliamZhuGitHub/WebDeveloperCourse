const fetch = require('node-fetch');
const api_key = "f9c4a093e4368819986f697f25aaa5b6"
const url = `https://api.openweathermap.org/data/2.5/forecast?zip=02118,US&appid=${api_key}&units=imperial`
 
fetch(url)
.then((response) => {
    return response.json()
})
.then((response) => {
    for(let i = 1; i <= 39; i+= 8){
    console.log("Temperature will be: "  + response.list[i].main.temp);
}
})

.catch((err) => {
    console.log(err);
});