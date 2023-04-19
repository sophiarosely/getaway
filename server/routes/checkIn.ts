const checkInRoutes = require('express').Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
require('dotenv').config();

checkInRoutes.get('/', async (req: any, res: any) => {
  // res.status(200).send('GET request worked!');
  // code example of what to implement
  const allUsers: any = await prisma.user.findMany();
  res.status(200).json(allUsers);
});

checkInRoutes.post('/', async (req: any, res: any) => {
  // req.body = {
  //   id: 420,
  //   googleId: '50',
  //   name: 'jigglebilly',
  // };
  // res.status(201).send('POST request worked!');

  const newUser: any = await prisma.user.create({
    data: {
      id: req.body.id,
      googleId: req.body.googleId,
      name: req.body.name,
    },
  });

  res.status(201).json(newUser);

  // WHEN INPUTS + EXPORTS FIXED, USE POSTMAN TO TEST ADDING USERS
  /*


  Add json to the body
  req.body = {
    id: 420,
    googleId: '50',
    name: 'jigglebilly',
  };
  
  AFTER USING PRISMA, CAN TEST AND CHECKOUT IN MYSQL Workbench
  
  A GET REQUEST SHOULD ALSO RETURN ALL THE USERS.
  
  */
});

checkInRoutes.put('/:id', async (req: any, res: any) => {
  const id = req.params.id;
  const newName = req.body.name;
  const updatedUser: any = await prisma.user.update({
    where: { id: parseInt(id) }, // we need to parse integer? look into
    data: {
      name: newName,
    },
  });
  res.status(204).json(updatedUser);
});
/*

  
  AFTER USING PRISMA, CAN TEST AND CHECKOUT IN MYSQL Workbench
  
  A GET REQUEST SHOULD ALSO RETURN ALL THE USERS.

  BUT HERE, WANT TO TEST PUT REQUEST @ ID endpoint
  {
    "name": "spanky"
  }
  
  */

checkInRoutes.delete('/:id', async (req: any, res: any) => {
  const id = req.params.id;
  const deletedUser: any = await prisma.user.delete({
    where: { id: parseInt(id) }, // we need to parse integer? look into
  });
  res.status(200).json(deletedUser);
});

module.exports = checkInRoutes;
