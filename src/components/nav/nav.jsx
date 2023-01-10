import { Link } from "react-router-dom";
import Login from "./loginNav/loginNav";
import "./nav.scss";

function Nav() {
  return (
    <nav className="bg-zinc-900 h-12 border-b-2 border-zinc-700 grid-cols-2 grid p-2">
      <Link to="/" className="">
        <h1 href="/" className="text-zinc-200 text-xl">
          Wehi
        </h1>
      </Link>

      <div className="flex justify-end">
        <Link to="/notes" className="mr-12">
          <p>Notes</p>
        </Link>
        <Login />
      </div>
    </nav>
  );
}

export default Nav;
