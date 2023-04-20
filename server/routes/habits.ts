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
    const { googleId } = req.body;
    const habits = await prisma.habits.findMany({ where: { user_id: googleId } });
    res.send(habits);
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
habitsRoutes.put('/completed', async (req: any, res: any) => {
  try {
  const { habitId } = req.body.data;
  //   const habit = await prisma.habits.update({
  //     where: {
  //       id: habitId
  //     },
  //     data: {
  //       completed: true
  //     }
  //   });
    res.send(habitId.toString());
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});
// this will delete a habit
habitsRoutes.delete('/delete', async (req: any, res: any) => {
  try {
    console.log(req.body)
    const { habitId } = req.body;
    
    await prisma.habits.delete({
      where: {
        id: habitId
      }
    });
    res.send('Success');
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});

export default habitsRoutes