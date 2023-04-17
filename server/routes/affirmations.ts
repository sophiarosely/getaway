const affirmationRoutes = require('express').Router();
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const config = new Configuration({
    apiKey: process.env.AFFIRMATIONS_OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

affirmationRoutes.get('/mood/:moodString', (req: any, res: any) => {
    const { moodString } = req.params

    const runPrompt = async () => {
        const affirmationPrompt = `I'm feeling ${moodString}, can you send me 5 affirmations, based on my mood?`

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

module.exports = affirmationRoutes;