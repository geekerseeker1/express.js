const express = require('express');
const app = express();
const port = 3000; // You can change the port number if needed

// JSON data
const products = [
  {
    "id": 1,
    "name": "Noodles",
    "price": 20
  },
  {
    "id": 2,
    "name": "Pizza",
    "price": 400
  },
  {
    "id": 3,
    "name": "Cookies",
    "price": 50
  }
];

// API to list all products
app.get('/products', (req, res) => {
  res.json(products);
});

// API to fetch a product with the highest price
app.get('/products/highest-price', (req, res) => {
  let highestPriceProduct = products.reduce((prev, current) => {
    return (prev.price > current.price) ? prev : current;
  });

  res.json(highestPriceProduct);
});

// API to fetch the sum of prices of all products
