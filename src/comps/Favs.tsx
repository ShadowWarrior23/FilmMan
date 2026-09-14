import { useFavs } from '../contexts/FavsContext';

function Favs() {
  const {favList, remFav, remAllFavs} = useFavs();

  return (
    <>
      <h1>Favs</h1>
      {favList.length && (
        <button onClick={remAllFavs}>Delete all favorites</button>
      )}
      <ul>
        {favList.length && favList.map(fm => (
          <li key={fm}>
            <button style={{'textDecoration':'None'}} onClick={() => remFav(fm)}>{fm}</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Favs;