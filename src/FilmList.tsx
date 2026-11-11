import { useEffect, useState } from "react";
import { API_URL } from "./api";
import type { Film } from "./types";

const FilmList = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const load = async () => {
    try {
      const response = await fetch(`${API_URL}/items`);
      if (!response.ok) {
        throw new Error("Could not load films");
      }
      const data = await response.json();
      setFilms(data);
    } catch {
      setError("Something went wrong loading your films");
    } finally {
      setLoading(false);
    }
  };

  load();
}, []);

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