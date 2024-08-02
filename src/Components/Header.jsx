import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header({ theme, func }) {
  return (
    <div className={`header ${theme ? 'dark' : 'light'}`}>
      <div className='name-surname'>
        &lt;/&gt;
        <Link className="change" to="/"> Adrian Palcic </Link>
      </div>

      <Navbar />

      <div className='light-dark' onClick={func}>
        <i className={`fa-solid ${theme ? 'fa-moon' : 'fa-sun'}`} ></i>
      </div>
    </div>
  );
}

export default Header;
