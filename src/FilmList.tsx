import FilmCard from "./FilmCard";
import { useEffect, useState } from "react";
import { API_URL } from "./api";
import type { Film, Status } from "./types";

const statuses: ("All" | Status)[] = ["All", "Own", "Want"];

const FilmList = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<"All" | Status>("All");

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

  const visibleFilms =
    selectedStatus === "All"
      ? films
      : films.filter((film) => film.status === selectedStatus);

  return (
    <div>
      <div className="filters">
        {statuses.map((status) => (
          <button
            key={status}
            className={status === selectedStatus ? "filter active" : "filter"}
            aria-pressed={status === selectedStatus}
            onClick={() => setSelectedStatus(status)}
          >
            {status}
          </button>
        ))}
      </div>
      <div className="film-grid">
        {visibleFilms.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
};

export default FilmList;
