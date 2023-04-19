import Therapist from '../components/Therapist'
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const TherapistList = (props: any) => {

  const [therapistDetails, setTherapistDetails ] = useState<Array<object>>([]);
  const { therapists } = props;

  const [open, setOpen] = useState(false);
  const [popup, setPopup ] = useState({})

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (details:any) => {
    setOpen(true);
    setPopup(details)
  };


useEffect(()=>{
  get20calls();
},[therapists])


console.log('popup', popup)

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
console.log(open)
console.log(therapistDetails)

  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {therapistDetails.map((therapist:any, index: number) => (
          <Grid item key={therapist.data.result.place_id} xs={12} sm={6} md={4} lg={3} >
          <Therapist key={therapist.data.result.place_id} therapist={therapist.data.result} handleOpen={handleOpen} />
          </Grid>
        ))}
        </Grid>
        {open && (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={() => setOpen(false)}
    >
      <CircularProgress/>
    </Backdrop>
  )}
    </div>
  );
};

export default TherapistList;