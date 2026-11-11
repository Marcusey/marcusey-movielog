import { useEffect, useState } from "react";
import { API_URL } from "./api";
import type { Film } from "./types";

const FilmList = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  if (loading) return <p>Loading films...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>{film.title}</li>
      ))}
    </ul>
  );
};

export default FilmList;