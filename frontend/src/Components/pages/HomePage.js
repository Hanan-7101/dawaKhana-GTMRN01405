import React from 'react'
import Navbar from '../common/navbar';
import CardDisplay from '../common/card';

import "./style.css"
const HomePage = () => {


  return (
    <div className='Home'   >
   <Navbar/>
<div>
    <CardDisplay/>
</div>

 </div>
);
  
}

export default HomePage