import { Router } from "express";
require('dotenv').config();
const router = Router()
import axios from "axios";
const GOOGLE_PLACES_API = process.env.GOOGLE_PLACES_API
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

//this function gets the first 20 therapists near you

router.get('/search',(req:any,res:any)=>{
  axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
  params: {
    key: GOOGLE_PLACES_API,
    radius: '4000',
    location: `${req.query.lat},${req.query.long}`,
    keyword: 'therapist',


  }
})
.then((response:any)=>{
res.send(response.data).status(200)
})
.catch((err:any)=>{
  res.status(500)
  console.error("failed to get therapists", err)
})
})

//this function gets the next 20 and can only be used to give you a total of 60 therapists aka 2 times
router.get('/next20',(req:any,res:any)=>{
  axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
  params: {
    key: GOOGLE_PLACES_API,
    radius: '4000',
    location: `${req.query.lat},${req.query.long}`,
    keyword: 'therapist',
    pagetoken: req.query.pagetoken,

  }
})
.then((response:any)=>{
res.send(response.data).status(200)
})
.catch((err:any)=>{
  res.status(500)
  console.error("failed to get therapists", err)
})
})


//this function will be used to get the specific details about each therapist
router.get('/details', (req:any, res:any)=>{
  axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
    params:{
      place_id: req.query.place_id,
      key: GOOGLE_PLACES_API
    }
  })
  .then((response:any)=>{
    res.send(response.data).status(200)
  })
  .catch((err:any)=>{
    console.error("failed to get the details of therpaists", err);
    res.status(500)
  })
})



router.post('/save-therapist', (req:any, res: any) => {
  const{ googleId } = req.body.data
  const therapist = req.body.data
   prisma.user.findFirst({ where: { googleId: googleId } })
   .then((user:any)=>{
    console.log(therapist)
  prisma.therapists
    .create({
      data: {
        hours: therapist.hours,
        formatted_address: therapist.formatted_address,
        formatted_phone_number: therapist.formatted_phone_number,
        rating: therapist.rating,
        user: {
          connect: { id: user.id }
        }
      },
      })
    .then(() => {
      res.status(201).send("successfully saved therapist");
    })
    .catch((err: Error) => {
      res.status(500);
      console.error("could not save a therapist", err);
    })
   })
   .catch((err:Error)=>{
    res.status(500);
    console.error("could not find user")
   })


});



router.get("/get-therapist", (req:any, res:any)=>{

})






// module.exports = router
export default router;