import React from 'react'
import { Routes, Route , Link } from 'react-router-dom';
import Home from '../Nav/Home'
import Register from '../Nav/Register';
import Show from '../Nav/Show';
import Card from '../Nav/Card';

const RoutesComponent = () => {
  return (
	<div>
		
      <Routes> 
        <Route exact path="/" element={<Home />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/show" element={<Show />} />
        <Route path="/card" element={<Card />} />
      </Routes> 
	</div>
  )
}

export default RoutesComponent
