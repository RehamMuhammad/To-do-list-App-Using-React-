import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/todo" className="nav-link">
            To-DO App
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;
