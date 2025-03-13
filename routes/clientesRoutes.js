const express = require('express');
const router = express.Router();



router.get('/clientes', (req, res) => {
    res.send('hola mundoooo');
  }
);


module.exports = router;