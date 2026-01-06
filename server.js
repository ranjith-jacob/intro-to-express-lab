// Task 1

const express = require('express');
//Initial setup step 1

const app = express();
//Initial setup step 2

app.get("/greetings/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
});

// expressJS.httpmethod("URL parameter/s", (req, res) => {
//     res.send(`string using dot notation`)    
// })

//Task 2

app.get("/roll/:dieNumber", (req, res) => {
    // if (typeof req.params.dieNumber !== "number") {
    if (isNaN(req.params.dieNumber)) {
        res.send("You must specify a number.");
    } else
    (res.send(`You rolled a ${Math.floor(Math.random() * req.params.dieNumber)}!`));
})

//Task 3

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get("/collectibles/:indexNum", (req, res) => {
    if (typeof collectibles[req.params.indexNum] === "undefined") {
        res.send("This item is not yet in stock. Check back soon!");
    } else 
    (res.send(`So, you want the ${collectibles[req.params.indexNum].name}? For ${collectibles[req.params.indexNum].price}, it can be yours!`));
})


//Task 4

  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

//! pt. 1

//! pt. 2

app.get("/shoes", (req, res) => {
    res.send(shoes.filter((shoe) => {
        shoe.type = req.query.type; //! pt. 3, not working yet
    }))
})

app.get("/shoes", (req, res) => {
    //res.send(`The ${shoes.name} ${shoes.name} costs ${shoes.price}`);
    res.send(shoes); //pt. 4
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});
//Initial setup step 3

