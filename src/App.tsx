import { Route, Routes } from "react-router";
import Layout from "./Layout";
import FilmList from "./FilmList";
import FilmPage from "./FilmPage.tsx";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<FilmList />} />
        <Route path="films/:id" element={<FilmPage />} />
        <Route path="new" element={<p>New film form</p>} />
        <Route path="*" element={<p>Page not found</p>} />
      </Route>
    </Routes>
  );
};

export default App;