import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Appu from './Components/App';
import Design from './Components/Design';
import Navbar from './Components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <BrowserRouter>
       <Navbar />
       {/* <Appu /> */}
    </BrowserRouter>
  
  </>


);



