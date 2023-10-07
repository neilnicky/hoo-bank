import "./Footer.css";
import { footerLinks, socialMedia } from "../../constants";
import { logo } from "../../assets";

const Footer = () => {
  return (
    <div className="app_footer app_bg section_padding">
      <div className="footer">
        <div className="footer_main">
          <img src={logo} alt="logo" />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="footer_content">
          {footerLinks.map((footerLink) => {
            return (
              <div key={footerLink.key} className="footer_content-title">
                <h4>{footerLink.title}</h4>
                <div className="footer_content-links">
                  {footerLink.links.map((link, index) => {
                    return <p key={link.key + index}>{link.name}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer_split-line" />
      <div className="footer_copyrights">
        <p>Copyright  | 2021 HooBank. All Rights Reserved.</p>
        <div className="footer_socialmedia">
          {socialMedia.map((media) => {
            return <img key={media.id} src={media.icon} alt="icon" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
