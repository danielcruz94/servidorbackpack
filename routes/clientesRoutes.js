const express = require('express');
const router = express.Router();

const {checkAPIKey}=require('../middlewares/auth.handler')


router.get('/clientes',checkAPIKey, (req, res) => {
    res.send('hola mundoooo');
  }
);


module.exports = router;