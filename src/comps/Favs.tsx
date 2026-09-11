import { useState } from 'react';
import { useFavs } from '../contexts/FavsContext';

function Favs() {
  const {favList, remFav} = useFavs();

  return (
    <>
      <h1>Favs</h1>
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