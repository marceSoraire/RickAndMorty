import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../Style/Style.css';
const Cards = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345, marginTop: 10 }} className='grandCard'>
      <CardMedia
        component="img"
        image={data.image}
        alt={data.status}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant='outlined'
          href={`/details/${data.id}`}
          className='btn'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
export default Cards;