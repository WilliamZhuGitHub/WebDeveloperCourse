const e = require('express');
const express = require ('express');
const app = express();

app.get("/", (req,res) => {
    res.send("This is the homepage");
});

app.get("/sports/:sport_name", (req,res) => {
    if(req.params.sport_name == "soccer"){
        res.send("soccer bad");
    }
    else if(req.params.sport_name == "basketball"){
        res.send("basketball bad");
    }
    else if(req.params.sport_name == "golf"){
        res.send("golf bad");
    }
    else{
        res.send("sports page not found");
    }
 });


app.get("/parrot/:word/:count", (req,res) =>{
    let phrase = '';
    for(let i = 0; i < req.params.count; i++){
        phrase += req.params.word + " ";
    }
    res.send(phrase);
});

 app.get("*", (req,res) => {
     res.send("Oops 404");
 });


app.listen(3000, () => {
    console.log("App is running on port 3000");
});