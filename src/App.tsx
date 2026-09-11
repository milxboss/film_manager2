import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import Home from './components/Home'
import MovieList from './components/MovieList'
import Favorites from './components/Favorites'
import { useFavorites, FavoritesProvider } from './context/FavoritesContext'

function App() {


  return (
    <FavoritesProvider>
      <BrowserRouter>
          <nav>
        <NavLink to="/" end>Főoldal</NavLink>
          <NavLink to="/movielist">Filmek</NavLink>
          <NavLink to="/favorites">Kedvencek</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/movielist' element={<MovieList/>}></Route>
          <Route path='/favorites' element={<Favorites/>}></Route>
        </Routes>
      
        </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
