import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Format, Status } from "./types";

type FormValues = {
  title: string;
  subtitle: string;
  category: Format;
  status: Status;
  rating: string;
  imageUrl: string;
  notes: string;
};

const NewFilmPage = () => {
  const [values, setValues] = useState<FormValues>({
    title: "",
    subtitle: "",
    category: "Blu-ray",
    status: "Own",
    rating: "",
    imageUrl: "",
    notes: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add film</h2>

      <label htmlFor="title">Title</label>
      <input id="title" name="title" value={values.title} onChange={handleChange} required />

      <label htmlFor="subtitle">Edition</label>
      <input id="subtitle" name="subtitle" value={values.subtitle} onChange={handleChange} />

      <label htmlFor="category">Format</label>
      <select id="category" name="category" value={values.category} onChange={handleChange}>
        <option value="Blu-ray">Blu-ray</option>
        <option value="DVD">DVD</option>
      </select>

      <label htmlFor="status">Status</label>
      <select id="status" name="status" value={values.status} onChange={handleChange}>
        <option value="Own">Own</option>
        <option value="Want">Want</option>
      </select>

      <label htmlFor="rating">Rating (1-5)</label>
      <input id="rating" name="rating" type="number" min="1" max="5" value={values.rating} onChange={handleChange} />

      <label htmlFor="imageUrl">Cover image URL</label>
      <input id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={handleChange} />

      <label htmlFor="notes">Notes</label>
      <textarea id="notes" name="notes" value={values.notes} onChange={handleChange} />

      <button type="submit">Save</button>
    </form>
  );
};

export default NewFilmPage;