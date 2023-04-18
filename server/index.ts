
import express from 'express';
import path from 'path';
import authRoute from './routes/auth';
import therapistRoute from './routes/therapist';
import affirmationRoute from './routes/affirmations';
import habitsRoute from './routes/habits';
import passportAuth from 'passport';
import cookieSession from 'cookie-session';
import passportSetup from './passport';
import cors from 'cors';
import connection from './db/index';
require('dotenv').config()


const app = express();
const port = 8080;

app.use(express.json());

app.use(
  cookieSession({name: "session", keys:["getaway"], maxAge: 24 * 60 * 60 * 100})
);

const clientPath = path.resolve(__dirname, '..', 'dist')
app.use(express.static(clientPath));


app.use(passportAuth.initialize())
app.use(passportAuth.session())

app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}))

app.get('/auth/google/callback', passportAuth.authenticate('google', { failureRedirect: '/' }), function(req:any, res:any) {
  res.redirect('/');
});


app.use("/therapist", therapistRoute);
app.use("/auth", authRoute);
app.use("/affirmations", affirmationRoute);
app.use("/habits", habitsRoute)


//bottom
app.get('*', (req: any, res: any) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});



