import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface ImageListProps {
  images: Array<{
    id: string;
    urls: {
      regular: string;
    };
    alt_description: string;
    user: {
      name: string;
    };
  }>;
}

const ImageList = ({ images }: ImageListProps) => {
  const cardStyle = {
    height: '100%',
  };
  const mediaStyle = {
    height: 0,
    paddingTop: '56.25%',
  };
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {images.map((image) => (
        <Card key={image.id} style={cardStyle}>
          <CardMedia style={mediaStyle} image={image.urls.regular} title={image.alt_description} />
          <CardContent>
            <Typography variant="subtitle1">{image.user.name}</Typography>
            <Typography variant="body2">{image.alt_description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ImageList;