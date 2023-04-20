import { Router } from 'express';
const moodEntryRoutes = Router();

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
require('dotenv').config();

// Endpoint for all the mood entries
moodEntryRoutes.get('/', (req: any, res: any) => {
  prisma.moodsOfUsers
    .findMany({
      include: {
        user: true,
        mood: true,
      },
    })
    .then((moodsOfUsers) => {
      // console.log('GET SUCCESS');
      res.status(200).json(moodsOfUsers);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error fetching mood entries' });
    });
});

// Endpoint for grabbing all the mood entries of a specific user
moodEntryRoutes.get('/user/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);

  prisma.moodsOfUsers
    .findMany({
      where: {
        user_id: userId,
      },
      include: {
        mood: true,
      },
    })
    .then((userMoods) => {
      // console.log('GET SUCCESS');
      res.status(200).json(userMoods);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error fetching mood entries for user' });
    });
});

// Endpoint for adding a mood entry for a user
/*
{
  "userId": 1,
  "moodColor": "Green",
  "moodDescription": "Low Energy, Pleasant"
}
*/
moodEntryRoutes.post('/', (req: any, res: any) => {
  const { userId, moodColor, moodDescription } = req.body;

  // Step 1: Create a new mood entry in the Mood model
  prisma.mood
    .create({
      data: {
        mood_color: moodColor,
        mood_desc: moodDescription,
      },
    })
    .then((mood) => {
      // Step 2: Create a new association in the MoodsOfUsers model
      return prisma.moodsOfUsers.create({
        data: {
          user: { connect: { id: userId } },
          mood: { connect: { id: mood.id } },
        },
      });
    })
    .then((moodOfUser) => {
      // console.log('POST SUCCESS');
      res.status(201).json(moodOfUser);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error creating mood entry' });
    });
});

export default moodEntryRoutes;
