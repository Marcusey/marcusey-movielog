import { Link } from "react-router";
import type { Film } from "./types";

type FilmCardProps = {
  film: Film;
};

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <article className="film-card">
      {film.imageUrl && <img src={film.imageUrl} alt={film.title} />}
      <h3>
        <Link to={`/films/${film.id}`}>{film.title}</Link>
      </h3>
      <p>{film.subtitle}</p>
      <p>{film.category} · {film.status}</p>
      {film.rating != null && <p>Rating: {film.rating}/5</p>}
    </article>
  );
};

export default FilmCard;
