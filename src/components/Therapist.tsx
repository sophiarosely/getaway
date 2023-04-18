import axios from "axios";
import { useEffect, useState} from 'react'
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Therapist = (props:any) =>{
const { therapist } = props;



return (
  <Card variant="outlined" sx={{ width: 320 }}>
    <CardOverflow>
      <AspectRatio ratio="2">
        <img
          src="https://png.pngtree.com/png-vector/20190221/ourlarge/pngtree-female-user-vector-avatar-icon-png-image_691506.jpg"
          srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <IconButton
        aria-label="therapists"
        size="md"
        variant="solid"
        color="danger"
        sx={{
          position: 'absolute',
          zIndex: 2,
          borderRadius: '50%',
          right: '1rem',
          bottom: 0,
          transform: 'translateY(50%)',
        }}
      >
        <Favorite />
      </IconButton>
    </CardOverflow>
    <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
      <Link href="#multiple-actions" overlay underline="none">
        {therapist.name}
      </Link>
    </Typography>
    <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
      <Link href="#multiple-actions">{therapist.formatted_address}</Link>
    </Typography>
    <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
        {therapist.formatted_phone_number}
      </Typography>
    <Divider inset="context" />
    <CardOverflow
      variant="soft"
      sx={{
        display: 'flex',
        gap: 1.5,
        py: 1.5,
        px: 'var(--Card-padding)',
        bgcolor: 'background.level1',
      }}
    >
      <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
        {therapist.rating}
      </Typography>
      <Divider orientation="vertical" />
      <Rating name="read-only" value={therapist.rating} readOnly />
    </CardOverflow>
  </Card>
);




//   return(
//     <li>
//       <div>
// {therapist.name}
// </div>
// <p>{therapist.formatted_address} </p>
//   <p>{therapist.formatted_phone_number}</p>
// <p>{therapist.rating}</p>
// {therapist.current_opening_hours ? (
//   <div dangerouslySetInnerHTML={{__html: therapist.current_opening_hours.weekday_text.join('<br>')}}></div>
// ) : (
//   <p>No opening hours available.</p>
// )}

//     </li>
//   )
}


export default Therapist;