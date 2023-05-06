import express from 'express';
import pkg from 'request';
const { get } = pkg;
const app = express();

app.get('/accounts/users', (req, res) => {
  console.log("Server Accounts");
  res.status(200).send("Server Accounts received request");
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
