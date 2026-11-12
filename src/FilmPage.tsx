import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { API_URL } from "./api";
import type { Film } from "./types";

const FilmPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch(`${API_URL}/items/${id}`);
        if (response.status === 404) {
          throw new Error("Film not found");
        }
        if (!response.ok) {
          throw new Error("Could not load film");
        }
        setFilm(await response.json());
      } catch (e) {
        setError(e instanceof Error ? e.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) return <p>Loading film...</p>;
  if (error || !film) return <p>{error}</p>;

  return (
    <article>
      <Link to="/">← Back</Link>
      {film.imageUrl && <img src={film.imageUrl} alt={film.title} />}
      <h2>{film.title}</h2>
      <p>{film.subtitle}</p>
      <p>{film.category} · {film.status}</p>
      {film.rating != null && <p>Rating: {film.rating}/5</p>}
      {film.notes && <p>{film.notes}</p>}
    </article>
  );
};

export default FilmPage;