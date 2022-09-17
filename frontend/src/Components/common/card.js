import React, { useEffect, useState } from 'react'


import Grid from '@mui/material/Grid'
import Medicine from '../medicine/Medicine'
import Searchbar from './searchBar'
import Box from '@mui/material/Box'
// import { Link } from 'react-router-dom';

const CardDisplay = () => {

    
    const [product,setProduct]=useState("")
    useEffect(()=>{
    
        const fetchData =async()=>{
            const response= await fetch("http://localhost:4002/api/medicines")
            const json =await response.json()
            console.log("Product",json);
           
           if(response.ok){ setProduct(json)}
        };
        fetchData()
    },[])
   
    

  return (
    
        <Grid container rowSpacing='2rem'  mt={'10px'} columnSpacing={{xs:1,sm:2,md:3}} xs={{width:'100%'}}>
          <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end" marginRight={"2rem"}>
            <Searchbar product={product} setProduct={setProduct}/>
            </Box>
          </Grid>
        
          {product&& product.map((products)=> {
return(

  <Medicine products={products} key={products._id}/>
  
)
})
          
}

   
    </Grid>

  );
  
}

export default CardDisplay 