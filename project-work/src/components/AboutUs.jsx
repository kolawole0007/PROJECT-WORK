import AboutUsContent from "./AboutUsContent";


function AboutUs () {
  return (
    <div className="AboutUs">
      <h2 className="suite">
        <span className="welcome-text"> WELCOME TO </span>
        <span className="hotel-text"> SHEAR HOTEL & SUITES</span>
      </h2>

      <div className="abt-image">
        <img src="/src/assets/images/image1.jpg" alt="aboutus img" />
      </div>
      <AboutUsContent />
    </div>
  );
}

export default AboutUs