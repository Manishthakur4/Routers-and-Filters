// routes/admin.js
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form method="POST" action="/admin/product"><input type="text" name="title"><input type="text" name="size"><button type="submit">Send</button></form>');
});

router.post('/product', (req, res, next) => {
    console.log('Submitted Data:', req.body);
    res.redirect('/');
});

module.exports = router;
