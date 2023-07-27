import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FormWithCustomhook } from './02-useEffect/FormWithCustomHook';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <FormWithCustomhook />
    {/* </React.StrictMode> */}  
  </BrowserRouter>
)
