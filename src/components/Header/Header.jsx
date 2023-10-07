import "./Header.css";
import { discount, robot, arrowUp } from "../../assets";

const Header = () => {
  return (
    <>
      <div className="header app_bg section_padding">
        <div className="side_blur" />
        <div className="header_content ">
          <div className="header_discount">
            <img src={discount} alt="dicount" />
            <p className="p_poppins">
              <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
            </p>
          </div>
          <div className="header_text">
            {/* <div className=""> */}
            <div className="header_text_width">
              <h1 className="h1_poppins">
                The Next
                <span> Generation </span>
                Payment Method.
              </h1>
            </div>
            {/* </div> */}

            <div className="getstarted">
              <div className="getstarted-bg">
                <div className="getstarted-cont">
                  <div>
                    <span className="getstarted-span">
                      Get
                      <img
                        src={arrowUp}
                        alt="arrowup"
                        className="getstarted-span-img"
                      />
                      Started
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header_para">
            <p className="p_poppins">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>

        <div className="header_img ">
          <img src={robot} alt="robot" />
          <div />
        </div>
      </div>
    </>
  );
};

export default Header;
