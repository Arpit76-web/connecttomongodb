const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./db');

// Connect to the database
connectDB();

//body parser middleware
app.use(express.json());
  

app.get('/', (req, res) => {
  res.send('Hello World!, this is my first Express app.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 

