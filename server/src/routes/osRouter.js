const express = require('express');
const router = express.Router();

router.get('/os/info', (req, res) => {
    res.json({ id: 'dudu' }); 
});

module.exports = router;