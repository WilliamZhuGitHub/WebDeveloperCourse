const express = require("express");
const app = express();

//Root
//request and response shortened to req an res 
app.get("/", (req,res) => {
    res.send("I am root");
});

// /login
app.get("/login", (req,res) =>{
    res.send("Login page here");
});

app.get("/users/:username", (req,res) => {
    //not apostraphe its the non shift ~ 
    res.render("username.ejs");
 });

app.get("/products/:id", (req,res) => {
    const product = {
        name: "Chew toy #2",
        price: 9.99
    }
    const comment = {
        content: [
            "This is awesome",
            "I love this toy",
            "This is a good item"
        ]
    }
    
    res.render("products.ejs", {
        item: product,
        comment: comment
    });
 });

app.get("*", (req, res) => {
    res.send("thats a 404");
});

//port and callback function
app.listen(3000, () => {
    console.log("App is running");
});
