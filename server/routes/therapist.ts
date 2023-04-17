const { Router } = require("express")
require('dotenv').config();
const router = Router()
const axios = require("axios")
const GOOGLE_PLACES_API = process.env.GOOGLE_PLACES_API

//this function gets the first 20 therapists near you
router.get('/search',(req:any,res:any)=>{
  axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
  params: {
    key: GOOGLE_PLACES_API,
    radius: '800000',
    location: `${req.query.lat},${req.query.long}`,
    keyword: 'therapist'
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
    radius: '800000',
    location: `${req.query.lat},${req.query.long}`,
    keyword: 'therapist',
    pagetoken: req.query.pagetoken
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
      place_id: "ChIJRfhonKyb5IkR2uAfRsPLrgA",
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


module.exports = router