const { Router } = require("express")
require('dotenv').config();
const router = Router()
const axios = require("axios")
const GOOGLE_PLACES_API = process.env.GOOGLE_PLACES_API

// router.get('/search',(req:any,res:any)=>{
//   console.log(req.query)
//   axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
//   params: {
//     key: GOOGLE_PLACES_API,
//     radius: '800000',
//     location: `${req.query.lat},${req.query.long}`,
//     keyword: 'therapist'
//   }
// })
// .then((response:any)=>{
// res.send(response.data).status(200)
// })
// .catch((err:any)=>{
//   res.status(500)
//   console.error("failed to get therapists", err)
// })
// })

router.get('/search',(req:any,res:any)=>{
  console.log(req.query)
  let pageOne: any[] = [];
  let pageTwo: any[] = [];
  let pageThree: any[] = [];
  axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
    params: {
      key: GOOGLE_PLACES_API,
      radius: '800000',
      location: `${req.query.lat},${req.query.long}`,
      keyword: 'therapist',
      pagetoken: ''
    }
  })
  .then((response:any)=>{
    console.log(response.data.next_page_token);
    pageOne.push(response.data.results);
    setTimeout(()=>{
      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: {
          key: GOOGLE_PLACES_API,
          radius: '800000',
          location: `${req.query.lat},${req.query.long}`,
          keyword: 'therapist',
          pagetoken: response.data.next_page_token
        }
      })
      .then((response:any)=>{
        pageOne.push(response.data.results);
        res.send(pageOne.flat()).status(200);
      })
      .catch((err:any)=>{
        res.status(500);
        console.error("failed to get therapists", err);
      });
    }, 2000); // wait for 2 seconds before making the second API call
  })
  .catch((err:any)=>{
    res.status(500);
    console.error("failed to get therapists", err);
  });
})






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