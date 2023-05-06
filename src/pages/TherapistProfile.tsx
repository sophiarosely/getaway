import React from "react";
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom'

const TherapistProfile = () =>{

const location = useLocation();
const { therapist } = location.state
console.log(therapist)
  return(
<div style={{padding:"200px"}}>

<div style={{display:'flex', flexDirection: "column", alignItems: "center", marginTop:"60px"}}>
  <img src={therapist.photoURL} style={{borderRadius: "50%", width: "300px", height: "300px"}} />
  <h1 style={{textAlign: "center"}}>{therapist.name}, {therapist.licenseType}</h1>
  <h3>{therapist.skills}</h3>
  <Button variant="contained" sx={{backgroundColor:'#6BB76A'}}>Book Now</Button>
</div>

<div
    style={{
      borderRadius:'40px',
      margin:'60px auto',
      color: '#5C6B9E',
      backgroundColor:'#5C6B9E',
      width: '70%',
      height: '7px',
      textAlign:'center',
      marginBottom: '60px'
    }}
  />

  <div style={{padding:'60px'}}>
    <h3>ABOUT ME</h3>
<p>
{therapist.aboutMe}
</p>
<div
    style={{
      borderRadius:'40px',
      margin:'60px auto',
      color: '#5C6B9E',
      backgroundColor:'#5C6B9E',
      width: '70%',
      height: '7px',
      textAlign:'center',
      marginBottom: '60px'
    }}
  />
<h3>PROFESSIONAL EXPERIENCE</h3>
<p>
{therapist.profExp}
</p>
<div
    style={{
      borderRadius:'40px',
      margin:'60px auto',
      color: '#5C6B9E',
      backgroundColor:'#5C6B9E',
      width: '70%',
      height: '7px',
      textAlign:'center',
      marginBottom: '60px'
    }}
  />
<h3>LICENSE INFORMATION</h3>
<p>
{therapist.licInfo}
</p>
<div
    style={{
      borderRadius:'40px',
      margin:'60px auto',
      color: '#5C6B9E',
      backgroundColor:'#5C6B9E',
      width: '70%',
      height: '7px',
      textAlign:'center',
      marginBottom: '60px'
    }}
  />
    <h3>REVIEWS</h3>
{therapist.TherapistReviews.map((review:any)=>{
return (
  <div>
    <h6>{review.rating}</h6>
    <p>{review.date}</p>
    <p>{review.text}</p>

  </div>
)
})}

  </div>



</div>


  )
}

export default TherapistProfile;