const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// Use morgan to log requests
app.use(morgan('combined'));

app.use(express.json());

app.post('/delay', (req, res) => {
  setTimeout(() => {
    res.status(200).send('Response after 100 seconds');
  }, 3 * 1000); // Delay for 100 seconds
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});