import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import CardActions from '@mui/material/CardActions';



import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme
({
  components: {
    // Name of the component
    MuiCardMedia: {
      styleOverrides: {
        // Name of the slot
        img: {
          // Some CSS
          objectFit:"cover"
          ,
        },
      },
    },
  },
});


const Medicine = ({products}) => {
  

  return (
   
    <ThemeProvider theme={theme} >
    <Grid item xs={3}   >
    <Card sx={{ maxWidth: 345,height:"400px" ,marginLeft:'0.9rem' ,marginRight:"0.9rem"}}   >
      
        <CardMedia
          component="img"
          height="200"
        
          image={products.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          
          <Typography variant="body1" color="text.secondary">
           {products.title}
          </Typography>
          <br/>
          <Typography gutterBottom variant="body2" component="div">
           {products.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Rs {products.price}
          </Typography>
        </CardContent>
        <CardActions>
            <Link  style={{textDecoration:"none"}}to={`/singleMedicine/${products._id}`}>
            <Button variant='contained' >  See More</Button>
            </Link>
          </CardActions>
      
    </Card>
    </Grid>
    </ThemeProvider>
  )
}

export default Medicine