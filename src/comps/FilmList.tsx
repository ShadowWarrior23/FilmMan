import { useEffect, useMemo, useRef, useState } from 'react';
import type {FilmIf} from '../ifs/Film'
import {getFilms} from '../services/app';
import Film from './Film';

function FilmList() {
  const [fl,setFl] = useState<FilmIf[]>([]);
  const [search, setSearch] = useState<string>('');
  const [favList, setFavList] = useState<string[]>([]);
  const inpRef = useRef<HTMLInputElement | null>(null);

  const filtFl = useMemo(() => fl.filter(f => !search ? fl : f.title.toLowerCase().includes(search.toLowerCase())), [search, fl]); // üres vizsgálata nélkül is működik...

  useEffect(() => {
    (async () => {
        setFl(await getFilms());
    })();
    inpRef.current?.focus();
  }, []);

  useEffect(() => {
    getFilms();
  }, [fl]);

  /* function addFav(id: number):void {
    const favFilm = fl.find(f => f.id === id)
    if (favFilm) //setFavList()
  } */

  return (
    <>
    <header>
        <h1>List of Films</h1>
        <input type="search" ref={inpRef} onChange={e => setSearch(e.target.value)} placeholder='Name of Film'/>
        <h3>Fav Films: </h3>
    </header>
    <main>
       {/*  {filtFl.length && filtFl.map(f => (
            <Film key={f.id} {...f} addFav={addFav}/>
        ))} */}
    </main>
    </>
  )
}

export default FilmList;