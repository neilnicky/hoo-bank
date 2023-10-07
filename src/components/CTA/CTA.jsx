import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta app_bg section_padding">
      <div className="cta_content">
        <h1>Let{`'`}s try our service now!</h1>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <button type="button" className="custom_button">
        Get Started
      </button>
    </div>
  );
};

export default CTA;
