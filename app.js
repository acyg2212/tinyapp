const express = require('express');
const app = express();
const mongoose = require('mongoose');

const db =



    app.get('/', (req, res) => res.send("This works!"));

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is serving on port ${port}`))