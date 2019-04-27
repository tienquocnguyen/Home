const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.get('/', (req,res) => res.send('Hello'));

app.listen(port, ()=> console.log('Server running on port ${port}'));
