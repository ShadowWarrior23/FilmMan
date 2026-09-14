import { useFavs } from "../contexts/FavsContext";
import { useThemes } from "../contexts/ThemesContext";

function Header0(){
    const { favList } = useFavs();
    const { theme, chTheme } = useThemes();

  return (
    <div className='header00'>
        <h1>FilmMan</h1>
        <p>Favs: {favList.length} pcs</p>
        <button onClick={chTheme}>{theme === 'dark' ? '☀️' : '🦫'}</button>
    </div>
  )
}

export default Header0;