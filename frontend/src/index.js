import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Register from './Components/pages/Register';
import HomePage from './Components/pages/HomePage';
import AddMedicine from './Components/medicine/actions/AddMedicine';


import Login from './Components/pages/login';
import UpdateMedicine from './Components/medicine/actions/updateMedicine';
import SingleMedicine from './Components/medicine/singleMedicine';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
  <Routes>
    <Route  path='/'          element={<App/>} />
    <Route  path='/login'      element={<Login/>}    />
    <Route  path='/register'      element={<Register/>}    />
    <Route   path='/homepage' element={<HomePage/>}/>
    <Route path='/addmedicine'     element={<AddMedicine/>} />
    <Route path='/singlemedicine/:id'  element={<SingleMedicine/>}/> 
    <Route    path='/updatemedicine/:id'                           element={<UpdateMedicine/>}                             />
  </Routes>
      
      </Router>
  
);


