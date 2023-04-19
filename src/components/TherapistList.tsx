import Therapist from '../components/Therapist'
import axios from 'axios';
import Grid from '@mui/material/Grid';
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
    <div style={{ height: '400px', overflow: 'auto' }}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {therapistDetails.map((therapist:any, index: number) => (
          <Grid item key={therapist.data.result.place_id} xs={12} sm={6} md={4} lg={3}>
          <Therapist key={therapist.data.result.place_id} therapist={therapist.data.result} />
          </Grid>
        ))}
        </Grid>
    </div>
  );
};

export default TherapistList;