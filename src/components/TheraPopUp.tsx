
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  Rating  from '@mui/material/Rating';
import  Box from '@mui/system/Box';

const TheraPopUp = (props:any) =>{
const { popup } = props;

  const handleClick = (e: any) => {
    e.stopPropagation();
  };

  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <Card sx={{ maxWidth: 500 }} onClick={handleClick}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: popup.icon_background_color }} aria-label="recipe">
              {popup.name[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={popup.name}
          subheader={
            <Box display="flex" flexDirection="column">
              <Typography variant="body2">{popup.formatted_phone_number}</Typography>
              <Typography variant="body2">{popup.formatted_address}</Typography>
              {popup.current_opening_hours?
              <Typography sx={{color:popup.current_opening_hours.open_now ? "green": "red" }}variant="body2">{popup.current_opening_hours.open_now ? "Open" : "Closed"}</Typography>
              : "Hours of Operation, Not Listed"
          }
            </Box>
          }
        />
        <CardMedia
          component="img"
          height="194"
          image={popup.photos ? popup.photos[0].html_attributions : "/static/images/cards/paella.jpg"}
          alt="Paella dish"
        />
        <CardContent>
          <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
            {popup.current_opening_hours ? popup.current_opening_hours.weekday_text.join(' '): "Hours of Operation, Not Listed"}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
        {popup.rating}
      </Typography>
      <Rating name="read-only" value={popup.rating} readOnly />
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>

        {popup.reviews ?
        <div style={{ height: '200px', overflow: 'auto' }}>
  <CardContent >
    {popup.reviews.map((review:any) => (
      <div key={review.author_name}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: popup.icon_background_color }} aria-label="recipe">
            {review.author_name[0]}
          </Avatar>}
          title={review.author_name}
          subheader={
            <Box display="flex" flexDirection="column">
              <Typography variant="body2">{review.relative_time_description}</Typography>
              <Rating name="read-only" value={review.rating} readOnly />
            </Box>
          }
        />
        <Typography paragraph>{review.text}</Typography>
      </div>
    ))}
  </CardContent>
  </div>
  : "No Reviews Available"
}
        </Collapse>
      </Card>
    );
}

export default TheraPopUp;