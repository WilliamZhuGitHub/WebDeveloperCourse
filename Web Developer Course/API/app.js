const express = require('express')
const app = express();

const fetch = require('node-fetch')
const api_key = "78271e73";

app.set("view engine" , "ejs");


app.get("/", (req,res) => {
    res.send("Root Route");
});

app.get("/movies", (req,res) =>{
    fetch(`http://www.omdbapi.com/?apikey=${api_key}&s=Star+Wars`)
    .then((data) => {
       return data.json();
    })
    
    .then((data) => {
        res.render("movies", {data})
      })

     .catch((err) => {
        res.send(err);
     });
  });


 app.get("*", (req, res) => {
    res.send("404");
 });

app.listen(3000, () => {
    console.log("server running on port 3000");
})