import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'React-router';
import './App.css'
import FilmList from './comps/FilmList';
import Home from './comps/Home';
import Favs from './comps/Favs';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end>Homeless Shelter</NavLink>
        <NavLink to="/movielist">Catalogue of Films</NavLink>
        <NavLink to="/favs">The Chosen Ones</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movielist' element={<FilmList/>}/>
        <Route path='/favs' element={<Favs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;