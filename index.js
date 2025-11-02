const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./db');
const users = require('./routes/users');

// Connect to the database
connectDB();

//body parser middleware
app.use(express.json());

app.use('/api', users);
  

app.get('/', (req, res) => {
  res.send('Hello World!, this is my first Express app.and from today i will start to learn backend development');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 

