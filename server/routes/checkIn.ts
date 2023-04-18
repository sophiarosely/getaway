const checkInRoutes = require('express').Router();
require('dotenv').config();

checkInRoutes.get('/', (req: any, res: any) => {
  res.status(200).send('GET request worked!');
});

checkInRoutes.post('/', (req: any, res: any) => {
  res.status(201).send('POST request worked!');
});

module.exports = checkInRoutes;
