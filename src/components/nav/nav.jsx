import { Link } from "react-router-dom";
import './nav.scss';

function Nav() {
  return (
    <nav className="bg-zinc-900 h-12 border-b-2 border-zinc-700 grid-cols-2 grid p-2">
        <Link to="/" className="">
          <h1 href="/" className="text-zinc-200 text-xl">
            Wehi
          </h1>
        </Link>
         
        <Link className="text-right" to="/notes">
          <p>Notes</p>
        </Link>
    </nav>
  );
}

export default Nav;
