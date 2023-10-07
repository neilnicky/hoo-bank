import { features } from "../../constants";
import "./Business.css";

const Business = () => {
  return (
    <div className="business app_bg section_padding">
      <div className="business_content">
        <h1>You do the business, we{`'`}ll handle the money.</h1>
        <p>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="custom_button" type="button">
          Get Started
        </button>
      </div>

      <div className="business_features">
        {features.map((feature, index) => {
          return (
            <div key={feature.id + index} className="business_features-content">
              <img src={feature.icon} alt="icon" />
              <div className="business_features_text">
                <h4>{feature.title}</h4>
                <p>{feature.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Business;
