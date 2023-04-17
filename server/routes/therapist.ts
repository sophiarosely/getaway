const { Router } = require("express")
const router = Router()
const axios = require("axios")
const GOOGLE_PLACES_API = process.env.GOOGLE_PLACES_API

router.get('/search',(req:any,res:any)=>{
  axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
  params: {
    key: 'AIzaSyApJBHf29dIWEv09KiG2ETirPkj8mJRNjc',
    radius: '800000',
    location: '29.9511,-90.0715',
    keyword: 'therapist'
  }
})
.then((response:any)=>{
  console.log('succesful Get of therapists', response.data)
res.send(response.data).status(200)
})
.catch((err:any)=>{
  res.status(500)
  console.error("failed to get therapists", err)
})
})



module.exports = router