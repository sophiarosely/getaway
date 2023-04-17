
const express = require('express');
const path = require('path');
const authRoute = require('./routes/auth');
const affirmationRoute = require('./routes/affirmations')
const passportAuth = require('passport')
const cookieSession = require('cookie-session')
const passportSetup = require('./passport')
const cors = require('cors')
const connection = require('./db/index')
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



app.use("/auth", authRoute);
app.use("/affirmations", affirmationRoute);


//bottom
app.get('*', (req: any, res: any) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});



