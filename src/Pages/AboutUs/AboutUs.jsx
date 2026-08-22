import "./AboutUs.css"
import Header from "../../Componates/Header/Header";

function AboutUs () {
  return (
    <div className="aboutus">
      <Header />
      <h2 className="aboutus__title">About Us</h2>
      <div className="aboutus__Hero">
        <p>This is a simple about us page component.</p>
        {/* do an img of the store from the frount then add some text */}
      </div>
      <div className="aboutus__meet">
        <h3 className="aboutus__meet-title">Meet Our Team</h3>
        <div className="aboutus__meet-container"></div>
        {/* display team cards here with a photo of each member name and specialty */}
      </div>
    </div>
  );
}

export default AboutUs;