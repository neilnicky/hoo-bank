import "./CardDeal.css";
import { card } from "../../assets";

const CardDeal = () => {
  return (
    <div className="carddeal app_bg section_padding">
      <div className="carddeal_content">
        <h1>Find a better card deal in few easy steps.</h1>
        <p>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="custom_button" type="button">
          Get Started
        </button>
      </div>

      <div className="carddeal_img">
        <img src={card} alt="card" />
      </div>
    </div>
  );
};

export default CardDeal;
