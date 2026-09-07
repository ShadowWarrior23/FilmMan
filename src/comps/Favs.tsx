import { useState } from 'react'

function Favs() {
  const [favList, setFavList] = useState<string[]>([]);

  return (
    <>
      <h1>Favs</h1>
      <main>
        {favList.length && favList.map(fm => (
          <article>
            <p>{fm}</p>
            <button>Delete from Favs</button>
          </article>
        ))}
      </main>
    </>
  )
}

export default Favs;