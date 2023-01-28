import logo from "../images/logo.svg";
import { pageLinks,socialLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map(listItem => {
            return (
              <li key={listItem.id}>
                <a href={listItem.link} className="nav-link">{listItem.text}</a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map(socialLink=>{
            const {id,href,icon} = socialLink;
            return(
              <li key={id}>
                <a href={href} className="nav-icon" target="_blank" rel="noreferrer"><i className={icon}></i></a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;