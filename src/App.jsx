import React from 'react'
import {  } from 'react-router-dom'
import Home from './Nav/Home'
import Register from './Nav/Register'
import Show from './Nav/Show'


const App = () => {
  return (
    <Router>
      <div>
        <Route>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/show" component={Show} />
        </Route>
      </div>
    </Router>
  )
}

export default App