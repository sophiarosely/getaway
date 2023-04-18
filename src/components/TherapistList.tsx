import Therapist from '../components/Therapist'
import axios from 'axios';
import { useEffect, useState } from 'react';

const TherapistList = (props: any) => {

  const [therapistDetails, setTherapistDetails ] = useState<Array<object>>([]);
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
  .then((response: Array<object>)=>{

    setTherapistDetails(response)
  })
  .catch((err)=>{
    console.error('not today buster',err)
  })
}

console.log(therapistDetails)

  return (
    <div>
      <ul>
        {therapistDetails.map((therapist:any, index: number) => (
          <Therapist key={therapist.data.result.place_id} therapist={therapist.data.result} />
        ))}
      </ul>
    </div>
  );
};

export default TherapistList;