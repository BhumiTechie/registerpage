import React from 'react';
import { NavLink } from 'react-router-dom';
import RoutesComponent from './Routes/RoutesComponent'


const App = () => {
  return (
    <div>
      <nav className="flex justify-between items-center bg-gray-800 px-4">
        
        <div className="flex gap-5">
          <NavLink
            className="text-white hover:text-gray-300"
            activeClassName="text-gray-300"
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-white hover:text-gray-300"
            activeClassName="text-gray-300"
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className="text-white hover:text-gray-300"
            activeClassName="text-gray-300"
            to="/show"
          >
            Show
          </NavLink>
        </div>
      </nav>
      <RoutesComponent />
    </div>
  );
};

export default App;