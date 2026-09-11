import { useEffect, useMemo, useRef, useState, useContext } from 'react';
import type {FilmIf} from '../ifs/Film'
import {getFilms} from '../services/app';
import Film from './Film';
import { useFavs } from '../contexts/FavsContext';

function FilmList() {
  const [fl,setFl] = useState<FilmIf[]>([]);
  const [search, setSearch] = useState<string>('');
  
  const inpRef = useRef<HTMLInputElement | null>(null);

  const filtFl = useMemo(() => fl.filter(f => !search ? fl : f.title.toLowerCase().includes(search.toLowerCase())), [search, fl]); // üres vizsgálata nélkül is működik...

  const {favList, addFav} = useFavs();

  useEffect(() => {
    (async () => {
        setFl(await getFilms());
    })();
    inpRef.current?.focus();
  }, []);

  useEffect(() => {
    getFilms();
  }, [fl]);

  function handleFav(id: number):void {
    const favFilm = fl.find(f => f.id === id)
    if (favFilm) addFav(favFilm.title)
  }

  return (
    <>
    <header>
        <h1>List of Films</h1>
        <input type="search" ref={inpRef} onChange={e => setSearch(e.target.value)} placeholder='Name of Film'/>
        <h3>Fav Films: </h3>
    </header>
    <main>
       {filtFl.length && filtFl.map(f => (
            <Film key={f.id} {...f} addFav={handleFav}/>
        ))}
    </main>
    </>
  )
}

export default FilmList;