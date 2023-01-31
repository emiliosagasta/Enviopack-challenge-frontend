import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from './../Button';
import image from '../../image-product.jpg'
import "./MediaCard.css"

export default function MediaCard({sku, title, price}) {
  return (
    <Card sx={{ maxWidth: 200, marginTop:5, justifyContent:'space-between'}}>
      <CardMedia
        sx={{ height: 160 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        </Typography>
        <Typography sx={{marginBottom:5, fontWeight: 'bold'}} variant="body2">
          {title}
        </Typography>
        <Typography sx={{fontWeight: 'bold'}} variant="body3" color="text.secondary">
          $ {price}
        </Typography>
      </CardContent>
      <CardActions>
      <Button sku={sku} />
      </CardActions>
    </Card>
  );
}

