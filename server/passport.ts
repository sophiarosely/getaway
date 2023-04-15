const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
require('dotenv').config();
//const config = require('./config');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
  scope: ['profile', 'email']
},
function(accessToken:any, refreshToken:any, profile:any, cb:any) {
  return cb(null, profile);
//   const user = {
//     username: profile.displayName,
//     googleId: profile.id,
//     avatar: profile.photos[0].value
//   }
//  Users.findOne({googleId: profile.id})
//  .then((existingUser)=>{
//   if(existingUser){
//     return cb(null, profile);
//   }
//   Users.create(user)
//   .then((user)=>{
//     console.log('succesfully created user', user)
//     cb(null, profile);
//   })
//   .catch((err)=>{
//     console.log('could not add user to db', err)
//     cb(err, null);
//   })
//  })
//  .catch((err)=>{
//   console.log('could not find user', err)
//   cb(err, null);
//  })
}
));

passport.serializeUser((user:any,done:any)=>{
  done(null,user)
})

passport.deserializeUser((user:any,done:any)=>{
  done(null,user)
})