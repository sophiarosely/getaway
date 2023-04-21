import { Router } from 'express';
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const affirmationRoutes = Router();

const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const config = new Configuration({
    apiKey: process.env.AFFIRMATIONS_OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

// OpenAPI handler
affirmationRoutes.get('/mood/:moodString', (req, res) => {
    const { moodString } = req.params

    const runPrompt = async () => {
        const affirmationPrompt = `Today, I am feeling ${moodString}. Can you send me 5 affirmations, based on my mood?`

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: affirmationPrompt,
            max_tokens: 2048,
            temperature: 1,
        })
        const affirmationsArray = response.data.choices[0].text.split(/\d+\. /).filter((str: string) => str !== '').map((str: string) => str.trim());
        affirmationsArray.shift()
        res.send(affirmationsArray);
    }

    runPrompt();
})

// Adding affirmations to DB
affirmationRoutes.post('/save/', async (req, res) => {
   const { affirmations, title, googleId, favorite } = req.body

    try {
        const user = await prisma.user.findFirst({ where: { googleId: googleId } })

        const affirmation = await prisma.affirmations.create({
            data: {
                affirmationList: affirmations.join('/n'),
                title: title,
                user: {
                    connect: { id: user.id }
                  },
                  favorite: favorite
            }
        });
        res.send('Success: Affirmation saved.')
    } catch (err) {
        console.log(err);
        res.send('Error: Affirmation was not saved.')
    }
});

//Retrieving affirmations to DB
affirmationRoutes.get('/retrieve')

// Deleting affirmations
affirmationRoutes.delete('/remove')


export default affirmationRoutes