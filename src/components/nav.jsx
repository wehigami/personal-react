import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-zinc-900 h-12 flex align-center border-b-2 border-zinc-700">
      <div className="w-full h-full p-2">
        <img src="" alt="" />
        <Link to="/">
          <h1 href="/" className="text-zinc-200 text-xl">
            Wehi
          </h1>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
