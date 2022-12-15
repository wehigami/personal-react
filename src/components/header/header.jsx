import "./header.scss";
import video from "../../imgs/capon.mp4";

function Header() {
  return (
    <header className="h-96">
      <div className="magic-div">
        <h1 className="h-auto uppercase">
          Hey, I'm Eryk! I'm an aspiring
          <span className="magic">
            <span className="magic-text">&nbsp;full stack developer&nbsp;</span>
          </span>
          and this is my website!
        </h1>
      </div>
      <video className="videoTag" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </header>
  );
}

export default Header;
