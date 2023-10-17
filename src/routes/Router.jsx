import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Dashboard,PayrollForm } from '../components';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<Dashboard/>}/>
            <Route path='/add' element={<PayrollForm/>} />
            <Route path='/edit' element={<PayrollForm/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router