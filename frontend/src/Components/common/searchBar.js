import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';

const Searchbar = ({product,setProduct}) => {
   const [searchData,setSearchData]=useState("")
   const [filterData,setFilterData]=useState([])
   useEffect(()=>{
    const fetchMedicine =async()=>{
      const response =await fetch('/api/medicines')
      const data = await response.json()
     
        setFilterData(data)
     console.log(data)
    }
    fetchMedicine()

},[]  ) 
  
     const handleChange=(e)=>{
        setSearchData(e.target.value)
        
       console.log(filterData)    
   const filterResult= filterData.filter(value=>{
    return( value.title.toLowerCase().includes(e.target.value.toLowerCase()) || value.brand.toLowerCase().includes(e.target.value.toLowerCase()))
   })
   
   setProduct(filterResult)
     }



  return (
    <TextField
    id="standard-search"
    label="Search field"
    type="search"
    variant="filled"
    sx={{color:"white"}}
    onChange={handleChange}
     
   value={searchData}
  />
  )
}

export default Searchbar