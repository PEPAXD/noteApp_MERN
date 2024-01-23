require('dotenv').config();

// Dependencies
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT;

// Listen
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static('public'));

// Template Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

// handle 404
app.get('*', (req, res) => {
   // res.status('404').send('404: Page not found');
   res.status('404').render('404');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});