import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import Navbar from '../common/navbar';
import { Button } from '@mui/material';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
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
          objectFit:"cover",
          maxHeight:"500px"
          ,
        },
      },
    },
  },
});



const SingleMedicine = () => {
  const navigate = useNavigate();
  const [medicine, setmedicine] = useState("")
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4002/api/medicines/${id}`)
      const json = await response.json()
      console.log("Product", json);

      if (response.ok) { setmedicine(json) }
    };
    fetchData()
  }, [id])


  console.log(medicine)
  const handleDelete = async (e) => {

    e.preventDefault();
    try {
      const url = `http://localhost:4002/api/medicines/${id}`;
      const {  res } = await axios.delete(url)
      alert("Medicine Detelted")
      navigate(`/homepage`)
      console.log(res.message)
 
    }
    catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        console.log(error.response.data.message)
      }

    }

  }
  return (

    <div style={{ background: "linear-gradient(to top, #feada6 0%, #f5efef 100%)", height: "100vh" }}>

      <div><Navbar /></div>

      <Grid container rowSpacing='4rem' mt={'1rem'} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={6} marginLeft={"1rem"}>
          
            <ThemeProvider theme={theme}>
          <CardMedia
            component="img"
            
             
            image={medicine.imageUrl}
            alt="green iguana"
          />
          </ThemeProvider>
          
        </Grid>
        <Grid item xs={5} marginLeft={'1rem'}>
          <Typography variant="h4" >{medicine.title}</Typography><br/>
          <Typography variant="h6" ><b>Brand:</b>{medicine.brand}</Typography>
          
          <Typography variant="h6" ><b>Drug Form:</b> {medicine.drugForm}</Typography>
          <Typography variant="h6" ><b>Pack Size:</b>{medicine.packSize}</Typography>
          <Typography variant="h6" ><b>Drug Strength:</b>{medicine.drugStrength}</Typography>
          <Typography variant="h6" ><b>Price:</b> Rs {medicine.price}</Typography>
          <Typography variant="h6" ><b>Description:</b> {medicine.description}</Typography>
          <Typography variant="h6" >{medicine.discription}</Typography>
         <Link  to={`/updatemedicine/${medicine._id}`} >
         <Button
              
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update 
            </Button>
          </Link>
          <Button
             
              onClick={handleDelete}
              variant="contained"
              sx={{ mt: 3, ml:1,mb: 2 }}
            >
              delete
            </Button>

        </Grid>

      </Grid>
    </div>




  )
}

export default SingleMedicine
