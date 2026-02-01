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

app.get("/shoes", (req, res) => {
  const minPrice = req.query["min-price"];
  const maxPrice = req.query["max-price"];
  const type = req.query["type"];
  console.log(minPrice, maxPrice, type);

  const filteredShoes = shoes
  .filter(shoe => !type || shoe.type === type)
  .filter(shoe => !minPrice || minPrice <= shoe.price)
  .filter(shoe => !maxPrice || maxPrice >= shoe.price)
  res.send(filteredShoes);
});

// app.get("/shoes", (req, res) => {
//     res.send(shoes.filter((shoe) => {
//         shoe.type = req.query.type; // pt. 3, not working yet
//     }))
// })

// app.get("/shoes", (req, res) => {
//     //res.send(`The ${shoes.name} ${shoes.name} costs ${shoes.price}`);
//     res.send(shoes); //pt. 4
// })

app.listen(3000, () => {
  console.log("listening on port 3000");
});
//Initial setup step 3

//! Review notes below

// // install express app using CommonJS
// const express = require('express');
// // another way to install into application using ECMAscript
// // import express from 'express';

// // middleware using morgan 

// // use express for app
// const app = express();

// // routes 
// // exercise 1
// app.get('/greetings/:username', (req, res) => {
//   console.log('hello user', req.params.username);
//   const username = req.params.username;
//   res.send(`Hello there ${username}`);
// })

// // exercise 2
// app.get('/roll/:number', (req, res) => {
//   const getRandomRoll = (max) => {
//     const num = Math.floor(Math.random() * max);
//     return num;
//   }
//   const maxNumber = req.params.number;
//   if (getRandomRoll(maxNumber)) {
//     res.send(`You rolled a ${getRandomRoll(maxNumber)}`);
//   } else {
//     res.send('You must specify a number');
//   }


//   // another answer option below
//   // if (isNaN(req.params.number)) {
//   //   res.send('You must specify a number')
//   // } else {
//   //   const random = Math.floor(Math.random() * (req.params.number));
//   //   res.send(` you have rolled ${random}!`);
//   // }
// })

// // exercise 3
//   const collectibles = [
//     { name: 'shiny ball', price: 5.95 },
//     { name: 'autographed picture of a dog', price: 10 },
//     { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
//   ];

// app.get('/collectibles/:indexNum', (req, res) => {
//   const index = req.params.indexNum - 1;
//   console.log('index', index)
//   if (typeof collectibles[index] === 'undefined') {
//     res.send('this item is not yet in stock, check back soon');
//   } else {
//     (res.send(`So, you want the ${collectibles[index].name}? For ${collectibles[index].price}, it can be yours!`))
//   }
//   // alternative solution 
//   //  const index = req.params.index - 1
//   // const foundObject = collectibles[index]
//   //   if(!foundObject) {
//   //   return res.send('This item is not yet in stock. Check back soon!')
//   // }
//   // res.send(`So you want the ${collectibles[req.params.index].name}. For ${collectibles[req.params.index].price}, its yours!`)
// })

// // exercise 4
// app.get('/shoes', (req, res) => {
//   const minPrice = req.query['min-price'];
//   const maxPrice = req.query['max-price'];
//   const type = req.query['type'];

//   console.log(minPrice, maxPrice, type);

//   // shoes array 
//     const shoes = [
//       { name: "Birkenstocks", price: 50, type: "sandal" },
//       { name: "Air Jordans", price: 500, type: "sneaker" },
//       { name: "Air Mahomeses", price: 501, type: "sneaker" },
//       { name: "Utility Boots", price: 20, type: "boot" },
//       { name: "Velcro Sandals", price: 15, type: "sandal" },
//       { name: "Jet Boots", price: 1000, type: "boot" },
//       { name: "Fifty-Inch Heels", price: 175, type: "heel" }
//   ];

//   const filteredShoes = shoes
//   .filter(shoe => !type || shoe.type === type) // this fill filter out by type
//   .filter(shoe => !minPrice || minPrice <= shoe.price) // this will filter out by minPrice
//   .filter(shoe => !maxPrice || maxPrice >= shoe.price) // this will filter out by maxPrice
//   // res send
//   res.send(filteredShoes);
// })


// // listen on port 3000
// app.listen(3000, () => {
//   console.log('Listening on port 3000');
// })

