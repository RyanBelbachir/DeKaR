import express from 'express';
import pkg from 'request';
const { get } = pkg;
const app = express();

app.get('/location/users', (req, res) => {
  console.log("Server Location");
  res.status(200).send("Server Location received request");
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
