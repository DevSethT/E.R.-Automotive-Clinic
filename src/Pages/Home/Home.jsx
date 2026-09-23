import "./Home.css"
import Header from "../../Componates/Header/Header";
import Footer from "../../Componates/Footer/Footer"

function Home() {
  return (
    <div className="home">
      
      
      <Header />



      <div className="home__hero">
        {/* emailed picture as background for here using css */}
        {/* split the h2 into two lines and add another color to the second line */}
        {/* h2 is based off of slogan */}
        <h2 className="home__hero-text">Your Car,<span className="home__hero-span"> Our Priority</span></h2>
        {/* make this take up the same amount of space as the h2 and display it below it still looking pretty and the wording is free to change */}
        <p className="home__hero-description">We provide top-quality automotive services to keep your vehicle running smoothly.</p>
        {/* btn on hero that will be used to call the business */}
        <a href="tel:409-499-7634"  className="home__hero-btn-text"><button className="home__hero-btn">Get In Touch</button></a>
      </div>



      <div className="home__service">
        <h3 className="home__service-title">Our Services</h3>
        <p className="home__service-description">We offer a wide range of automotive services to meet all your vehicle needs.</p>
        {/* make little cards for each service w/ a name small description and an img */}
        <div className="home__service-cards">
          {/* map the cards to here and have a max of 5 or 6 if needed add an other card */}
          </div>
      </div>
    


      <div className="home__aboout">
        {/* have imgs of them actively working on vichals as the background or have 2-3 shoing with it */}
        <h3 className="home__about-title">About Us</h3>
        <p className="home__about-description">We are a team of experienced professionals dedicated to providing exceptional automotive services.</p>
        <a href="/about" className="home__about-link"><button className="home__about-btn">Learn More</button></a>
      </div>


      <div className="home__reviews">
        <h3 className="home__reviews-title">What Our Customers Say</h3>
        <div className="home__reviews-container">
          {/* map 3-5 reviews here */}
        </div>
        <p className="home__reviews-text">Don't just take our word for it - hear from our satisfied customers!</p>
        <a href="/reviews" className="home__reviews-link">
          <button className="home__reviews-btn">Read More Reviews</button>
        </a>
      </div>

      <Footer />

    </div>
  );
}

export default Home;
