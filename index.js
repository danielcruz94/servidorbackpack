const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello Express motherfucker')
});

app.listen(process.env.PORT || 3000,()=>(
    console.log("servidor corriendo en puerto 3000")
))
