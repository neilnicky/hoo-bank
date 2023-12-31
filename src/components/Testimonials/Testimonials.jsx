import "./Testimonials.css";
import { feedback } from "../../constants";
import { quotes } from "../../assets";

const Testimonials = () => {
  return (
    <div className="testimonials app_bg section_padding">
      <div className="testimonials_heading">
        <h1>What people are saying about us</h1>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="testimonials_content">
        {feedback.map((feed, index) => {
          return (
            <div key={feed.id + index} className="testimonials_card">
              <img src={quotes} alt="quotes" />
              <p>{feed.content}</p>
              <div className="testimonials_card-profile">
                <img src={feed.img} alt="profile" />
                <div className="testimonials_card-person">
                  <h3>{feed.name}</h3>
                  <p>{feed.title}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="side_blurr" />
      </div>
      
    </div>
  );
};

export default Testimonials;
