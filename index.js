// run `node index.js` in the terminal

const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());

require('dotenv').config();
app.use(express.json());

app.use(express.static('public'));

const port = process.env.PORT || 4500;

app.get('/user/hello', (req, res) => {
  res.status(200).send({ message: 'Hello User', status: 'success' });
});

app.listen(port, () => {
  console.log(`The server is listening to Port- ${port}`);
});
