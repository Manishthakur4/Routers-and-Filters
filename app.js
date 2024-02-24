// app.js
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use('/', (req, res, next) => {
    res.send('<h1>hello from Express</h1>');
});

app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
