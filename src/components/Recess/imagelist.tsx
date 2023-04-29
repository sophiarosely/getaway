import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { string } from 'prop-types';
import './scroll.css'

interface ImageListProps {
  image: string| undefined,
  key: number
}
const handleClick = () => {
  console.log("dog")
}
const ImageList = ({ image, key }: ImageListProps) => (
  <div className="image-item" key={key} >
    <img onClick={() =>handleClick()} src={image} />
  </div>
);

export default ImageList;