const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
    const dan = { name: 'Dan', age: 39, cool: true };
    //res.send('Hey! It works!');
    res.json(dan);
});

router.get('/reverse/:name', (req, res) => {
    const reverse = [...req.params.name].reverse().join('');
    res.send(reverse);
});

module.exports = router;