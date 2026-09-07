import { useState } from 'react';
import type {FilmIf} from '../ifs/Film'

const Film: React.FC<FilmIf> = ({id, title, genre, year, description, rating}) => {
  const [film, setFilm] = useState(0)

  return (
      <article id={id.toString()}>
        <h3>Title: {title}</h3>
        <p>Genre: {genre}</p>
        <p>Year: {year}</p>
        <p>Desc.: {description}</p>
        <p>Rating: {rating}</p>
      </article>
  )
}

export default Film;