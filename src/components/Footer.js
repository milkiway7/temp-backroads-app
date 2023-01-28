import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">

        {pageLinks.map(pageLink => {
          const { id, link, text } = pageLink;

          return (
            <li key={id}>
              <a href={link} className="footer-link">{text}</a>
            </li>
          );

        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(socialLink=>{
const {id,href,icon} = socialLink;

          return(
            <li key = {id}>
            <a href={href} target="_blank" rel="noreferrer" className="footer-icon"
            ><i className={icon}></i></a>
          </li>
          );

        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span>{new Date().getFullYear()} all rights reserved
      </p>
    </footer>
  )
}

export default Footer;