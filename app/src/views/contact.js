import "./static/css/contact.css";

import DocIcon from "./static/img/docs.svg";
import MapIcon from "./static/img/map.svg";
import StatsIcon from "./static/img/stats.svg";
import ContactIcon from "./static/img/contact.svg";

function Contact() {
  return (
    <div id="contact">
      <div className="contactCard">
        <img src={DocIcon}></img>
        <a href="#">Documentation</a>
      </div>
      <div className="contactCard">
        <img src={MapIcon}></img>
        <a href="#">Locations</a>
      </div>
      <div className="contactCard">
        <img src={StatsIcon}></img>
        <a href="#">Statistics</a>
      </div>
      <div className="contactCard">
        <img src={ContactIcon}></img>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
}

export default Contact;
