import { Route, Routes } from "react-router";
import Layout from "./Layout";
import FilmList from "./FilmList";
import FilmPage from "./FilmPage.tsx";
import NewFilmPage from "./NewFilmPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<FilmList />} />
        <Route path="films/:id" element={<FilmPage />} />
        <Route path="new" element={<NewFilmPage />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Route>
    </Routes>
  );
};

export default App;