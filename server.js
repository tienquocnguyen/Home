const express = require('express');
const app = express();
const port = 8000;
const bank = require('./routes/api/bank');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/api/bank",bank);

app.listen(port, ()=> console.log('Server running on port 8000'));
