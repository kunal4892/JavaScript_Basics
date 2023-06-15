const express = require("express");
const app = express()
const port = 3500;

app.get("/", (req,res)=> {
    let products = [
        {id: 1, title: "Macbook Pro", rating: 5},
        {id: 1, title: "Macbook Air", rating:4},
    ]
    res.json(products);
});

app.listen(port, ()=>{
    console.log(`Listening app on port${port}`);
})