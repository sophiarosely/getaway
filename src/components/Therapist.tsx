import axios from "axios";
import { useEffect, useState} from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import  IconButton  from "@mui/material/IconButton";
import Favorite from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';

const Therapist = (props:
  {therapist:
    {name:string, vicinity:string, opening_hours:{open_now:boolean}, rating:number, place_id:string},
    handleOpen:Function}) =>{

const { therapist, handleOpen } = props;





return (
  <Card sx={{ maxWidth: 345 }} onClick={()=>handleOpen(therapist)}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://png.pngtree.com/png-vector/20190221/ourlarge/pngtree-female-user-vector-avatar-icon-png-image_691506.jpg"
        alt="therapist icon"
      />
    <IconButton
  aria-label="therapists"
  size="medium"
  color="primary"
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
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {therapist.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {therapist.vicinity}
        </Typography>
        {therapist.opening_hours?  <Typography variant="body2" color="text.secondary">
          {therapist.opening_hours.open_now ? "Open" : "Closed"}
        </Typography> : "No Hours Available"}

      </CardContent>
    </CardActionArea>
    <CardActions>
    <Typography variant="body2" color="text.secondary">
        {therapist.rating}
      </Typography>
      <Rating name="read-only" value={therapist.rating} readOnly />
    </CardActions>
  </Card>
);


};


export default Therapist;