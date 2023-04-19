import { Router } from 'express';
const habitsRoutes = Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()
// import { prisma } from '../passport';
// the route for this is  localhost:8080/habits/


habitsRoutes.get('/', async (req: any, res: any) => {
  try {
    const user = await prisma.user.findFirst({ where: { googleId: '117568678137566768509' } });
    console.log(user);
    res.send('Success');
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});

export default habitsRoutes