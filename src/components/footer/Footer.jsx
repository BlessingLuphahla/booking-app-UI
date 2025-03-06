import "./footer.css";

import { footerData } from "../../data/footer";

function Footer() {
  const currentYear = new Date().getFullYear().toString();

  return (
    <div className="footer">
      <div className="footerLists">
        <ul className="footerList">
          {footerData.map((element, index) => (
            <li key={index} className="footerListItem">
              {element.name}
            </li>
          ))}
        </ul>
        <ul className="footerList">
          {footerData.map((element, index) => (
            <li key={index} className="footerListItem">
              {element.name}
            </li>
          ))}
        </ul>
        <ul className="footerList">
          {footerData.map((element, index) => (
            <li key={index} className="footerListItem">
              {element.name}
            </li>
          ))}
        </ul>
        <ul className="footerList">
          {footerData.map((element, index) => (
            <li key={index} className="footerListItem">
              {element.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="footerText">Copyright © {currentYear} REDD AXE</div>
    </div>
  );
}

export default Footer;
