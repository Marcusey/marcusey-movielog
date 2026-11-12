import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Movielog</Link>
          <Link to="/new">Add film</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;