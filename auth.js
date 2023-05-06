import express from 'express';
import pkg from 'request';
const { get } = pkg;
const app = express();

app.get('/authentification/users', (req, res) => {
  console.log("Server Authentification");
  res.status(200).send("Server Authentification received request");
});

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
