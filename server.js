const express = require('express');
const app = express();
const port = 3000; // You can change the port number if needed

// Set the views directory and template engine
app.set('views', './views');
app.set('view engine', 'ejs'); // You can choose a different template engine if you prefer

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('registration');
});

app.post('/register', (req, res) => {
  const { firstname, lastname, username } = req.body;

  // Save user data to a database or perform necessary actions
  // You can save the profile picture file to a folder and store its path in the database

  res.redirect('/user/' + username);
});

app.get('/user/:username', (req, res) => {
  const { username } = req.params;

  // Fetch
