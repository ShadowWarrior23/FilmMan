import { BrowserRouter, Routes, Route, NavLink } from 'React-router';
import './App.css'
import FilmList from './comps/FilmList';
import Home from './comps/Home';
import Favs from './comps/Favs';
import Header0 from './comps/header0';
import { FavsProvider } from './contexts/FavsContext';
import { ThemesProvider } from './contexts/ThemesContext';

function App() {
  return (
    <FavsProvider>
      <BrowserRouter>
      <ThemesProvider><Header0/></ThemesProvider>
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
    </FavsProvider>
  )
}

export default App;