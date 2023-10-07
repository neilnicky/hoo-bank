import "./Billing.css";
import { bill, apple, google } from "../../assets";

const Billing = () => {
  return (
    <div className="billing app_bg section_padding">
      <div className="billing_img">
        <div className="billing_side-blur" />
        <img src={bill} alt="billing" />
      </div>
      <div className="billing_content">
        <h1>Easily control your billing & invoicing.</h1>
        <p>
          Elit enim Mauris eu adipised massa etiam. Mauris eu adipiscing
          ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
          integer platea placerat.
        </p>
        <div className="billing_content-imgs">
          <img src={apple} alt="applestore" />
          <img src={google} alt="playstore" />
        </div>
      </div>
    </div>
  );
};

export default Billing;
