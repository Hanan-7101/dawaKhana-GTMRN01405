import React, { useState } from 'react'

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




const AddMedicine = () => {

  const [data, setData] = useState({
    title: "",
    imageUrl: "",
    brand: "",
    drugStrength: "",
    drugForm: "",
    packSize: "",
    description: "",
    price: ""


  })
  const [error, setError] = useState()
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const url = "http://localhost:4002/api/medicines";
      const { data: res } = await axios.post(url, data)
      navigate("/homepage")
      console.log(res.message)
      console.log(data)
    }
    catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
      }

    }

  }



  return (
    <div style={{ background: "linear-gradient(to top, #feada6 0%, #f5efef 100%)", height: "100vh" }}>
      <Container component="main" maxWidth="xs"  >
        <CssBaseline />
        <Box
          sx={{

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5" marginTop={10}>
            Add  a Medicine
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  value={data.title}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="imageUrl"
                  label="Image Url"
                  name="imageUrl"
                  value={data.imageUrl}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="brand"
                  label="Brand"
                  name="brand"
                  value={data.brand}
                  onChange={handleChange}
                  autoComplete="brand"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="drugForm"
                  label="Drug Form"
                  name="drugForm"
                  value={data.drugForm}
                  onChange={handleChange}
                  autoComplete="drugForm"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="packSize"
                  label="Pack Size"
                  name="packSize"
                  value={data.packSize}
                  onChange={handleChange}
                  autoComplete="brand"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="drugStrength"
                  value={data.drugStrength}
                  onChange={handleChange}
                  label="Drug Strength"

                  id="drugStrength"
                  autoComplete="drugStrength"
                />



              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  label="Description"

                  id="description"
                  autoComplete="description"
                />



              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  value={data.price}
                  onChange={handleChange}
                  autoComplete="Price"
                />
                {error && <Grid item xs={6}>{error}
                </Grid>}
              </Grid>


            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add medicine
            </Button>

          </Box>
        </Box>

      </Container>
    </div>

  )
}

export default AddMedicine