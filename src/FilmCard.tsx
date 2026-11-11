import type { Film } from "./types";

type FilmCardProps = {
  film: Film;
};

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <article>
      {film.imageUrl && <img src={film.imageUrl} alt={film.title} />}
      <h3>{film.title}</h3>
      <p>{film.subtitle}</p>
      <p>{film.category} · {film.status}</p>
      {film.rating != null && <p>Rating: {film.rating}/5</p>}
    </article>
  );
};

export default FilmCard;