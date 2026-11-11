import { Route, Routes } from "react-router";
import Layout from "./Layout";
import FilmList from "./FilmList";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<FilmList />} />
        <Route path="films/:id" element={<p>Film page</p>} />
        <Route path="new" element={<p>New film form</p>} />
        <Route path="*" element={<p>Page not found</p>} />
      </Route>
    </Routes>
  );
};

export default App;