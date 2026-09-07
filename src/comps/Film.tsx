import type {FilmIf2} from '../ifs/Film'

const Film: React.FC<FilmIf2> = ({id, title, genre, year, description, rating, addFav}) => {

  return (
      <article>
        <h3>Title: {title}</h3>
        <p>Genre: {genre}</p>
        <p>Year: {year}</p>
        <p>Desc.: {description}</p>
        <p>Rating: {rating}</p>
        <button id={id.toString()} onClick={() => addFav(id)}>Fav</button>
      </article>
  )
}

export default Film;