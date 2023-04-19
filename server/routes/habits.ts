import { Router } from 'express';
const habitsRoutes = Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()
// import { prisma } from '../passport';
// the route for this is  localhost:8080/habits/


// habitsRoutes.get('/', async (req: any, res: any) => {
//   try {
//     const user = await prisma.user.findFirst({ where: { googleId: '117568678137566768509' } });
//     console.log(user);
//     res.send('Success');
//   } catch (error) {
//     console.log('Error: ', error);
//     res.send('Error');
//   }
// });

//  this route will be for getting the users habits
habitsRoutes.post('/list', async (req: any, res: any) => {
  try {
  const { id } = req.body;
    await prisma.habits.find({ where: {id: id } });
  
    res.send('Success');
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});

// this route will be for posting a new habit
habitsRoutes.post('/newHabit', async (req: any, res: any) => {
  try {
    const { data } = req.body;
  const { habit_name, googleId, habit_type } = data;

  const newObj = {
    habit_name: habit_name,
    habit_type: habit_type,
    user_id: googleId
  };

    await prisma.habits.create( {data: newObj} )

    res.send('Success');
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});
// this will before updating habit completion
habitsRoutes.put('/completion', async (req: any, res: any) => {
  try {
    const user = await prisma.habits.findFirst({ where: { googleId: '117568678137566768509' } });
    console.log(user);
    res.send('Success');
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});
// this will delete a habit
habitsRoutes.delete('/delete', async (req: any, res: any) => {
  try {
    const user = await prisma.habits.findFirst({ where: { googleId: '117568678137566768509' } });
    console.log(user);
    res.send('Success');
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});

export default habitsRoutes