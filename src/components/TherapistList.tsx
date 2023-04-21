import Therapist from '../components/Therapist'
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import TheraPopUp from './TheraPopUp'

type Therapist = {
  name:string,
  vicinity:string,
  opening_hours:{open_now:boolean},
  rating:number,
  place_id:string
}

const TherapistList = (props: { therapists: Therapist[] }) => {


  const { therapists } = props;

  const [open, setOpen] = useState(false);
  const [popup, setPopup ] = useState({})




  const handleOpen = (details:object) => {
    setOpen(true);
    setPopup(details)
  };






  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {therapists.map((therapist:Therapist) => (
          <Grid item key={therapist.place_id} xs={12} sm={6} md={4} lg={3} >
          <Therapist key={therapist.place_id} therapist ={therapist} handleOpen={handleOpen} />
          </Grid>
        ))}
        </Grid>
        {open && (
    <Backdrop
      sx={{ color: 'whitesmoke', backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(4px)',
      zIndex: (theme) => theme.zIndex.drawer + 1}}
      open={open}
      onClick={() => setOpen(false)}
    >
      <TheraPopUp popup={popup}/>
    </Backdrop>


  )}
    </div>
  );
};

export default TherapistList;