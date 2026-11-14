import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { API_URL } from "./api";
import type { Film, Status } from "./types";

const FilmPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [actionError, setActionError] = useState<string | null>(null);

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

  const handleDelete = async () => {
    if (!window.confirm("Delete this film?")) return;

    try {
      const response = await fetch(`${API_URL}/items/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("You could'nt delete the film");
      }
      navigate("/");
    } catch {
      setActionError("Something went wrong deleting the film");
    }
  };

  const handleUpdate = async (changes: Partial<Film>) => {
    try {
      const response = await fetch(`${API_URL}/items/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(changes),
      });
      if (!response.ok) {
        throw new Error("Could not update the film");
      }
      setFilm((current) => (current ? { ...current, ...changes } : current));
      setActionError(null);
    } catch {
      setActionError("Something went wrong updating the film");
    }
  };

  if (loading) return <p>Loading film...</p>;
  if (error || !film) return <p>{error}</p>;

  return (
    <article className="film-page">
      <Link to="/" className="btn btn-outline">← Back</Link>
      {film.imageUrl ? (
        <img src={film.imageUrl} alt={film.title} />
      ) : (
        <div className="cover-placeholder">{film.title}</div>
      )}{" "}
      <h2>{film.title}</h2>
      <p>{film.subtitle}</p>
      <p>{film.category}</p>
      <label htmlFor="status">Status</label>
      <select
        id="status"
        value={film.status ?? "Own"}
        onChange={(e) => handleUpdate({ status: e.target.value as Status })}
      >
        <option value="Own">Own</option>
        <option value="Want">Want</option>
      </select>
      <label htmlFor="rating">Rating</label>
      <select
        id="rating"
        value={film.rating ?? ""}
        onChange={(e) => handleUpdate({ rating: Number(e.target.value) })}
      >
        <option value="" disabled>
          No rating
        </option>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>{" "}
      {film.notes && <p>{film.notes}</p>}
      {actionError && <p>{actionError}</p>}
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
};

export default FilmPage;
