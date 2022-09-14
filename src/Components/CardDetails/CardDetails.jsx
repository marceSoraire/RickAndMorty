import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

const CardDetails = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={data.image}
          alt={data.status}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`Name: ${data.name}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {`Specie: ${data.species}`}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {`Genre: ${data.gender}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`City: ${data.location.name}`}
          </Typography>
        </CardContent>
        < CardActions>
          <Button
            size="small"
            variant='outlined'
            href={`/`}
            className='btn'>
            Volver al Inicio
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
export default CardDetails;