import { useEffect, useState } from 'react';
import type {FilmIf} from '../ifs/Film'
import {getFilms} from '../services/app';
import Film from './Film';

function FilmList() {
  const [fl,setFl] = useState<FilmIf[]>([])

  useEffect(() => {
    (async () => {
        setFl(await getFilms());
    })();
  }, [])

  useEffect(() => {
    getFilms();
  }, [fl])

  return (
    <>
    <header>
        <h1>List of Films</h1>
        <input type="search" name="fs" placeholder='Name of Film'/>
        <h3>Fav Films: </h3>
    </header>
    <main>
        {fl.length && fl.map(f => (
            <Film key={f.id} {...f}/>
        ))}
    </main>
    </>
  )
}

export default FilmList;