import { Router } from 'express';
const checkInRoutes = Router();

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
require('dotenv').config();

checkInRoutes.get('/', async (req: any, res: any) => {
  const allUsers: any = await prisma.user.findMany();
  // console.log('GET SUCCESS');
  res.status(200).json(allUsers);
});

checkInRoutes.post('/', async (req: any, res: any) => {
  const newUser: any = await prisma.user.create({
    data: {
      googleId: req.body.googleId,
      name: req.body.name,
    },
  });
  // console.log('POST SUCCESS');
  res.status(201).json(newUser);
});

checkInRoutes.put('/:id', async (req: any, res: any) => {
  const id = req.params.id;
  const newName = req.body.name;
  const updatedUser: any = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      name: newName,
    },
  });
  // console.log('PUT SUCCESS');
  res.status(204).json(updatedUser);
});

checkInRoutes.delete('/:id', async (req: any, res: any) => {
  const id = req.params.id;
  const deletedUser: any = await prisma.user.delete({
    where: { id: Number(id) },
  });
  // console.log('DELETE SUCCESS');
  res.status(200).json(deletedUser);
});

export default checkInRoutes;
