import Therapist from '../components/Therapist'
import axios from 'axios';
import { useEffect, useState } from 'react';

const TherapistList = (props: any) => {
  const { therapists } = props;



useEffect(()=>{
  get20calls();
},[therapists])




const get20calls = () =>{
  Promise.all(therapists.map((therapist:any)=>{
    console.log('all 20 ids', therapist.place_id)
    return axios.get(`/therapist/details?place_id=${therapist.place_id}`)

  })
  )
  .then((response)=>{
    console.log("detailed response", response)
  })
  .catch((err)=>{
    console.error('not today buster',err)
  })
}



  return (
    <div>
      <ul>
        {therapists.map((therapist: any, index: number) => (
          <Therapist key={therapist.place_id} therapist={therapist} />
        ))}
      </ul>
    </div>
  );
};

export default TherapistList;