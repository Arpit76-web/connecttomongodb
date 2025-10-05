const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/', {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }   
};    

app.get('/', (req, res) => {
  res.send('Hello World!, this is my first Express app.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 