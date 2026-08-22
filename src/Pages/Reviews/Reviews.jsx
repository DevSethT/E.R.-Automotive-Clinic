import "./Reviews.css"
import Header from "../../Componates/Header/Header";


function Reviews () {
  return (
    <div className="reviews">
      <Header />
      <h2 className="reviews__title">Reviews</h2>
      <div className="reviews__container">
        {/* this is going to be where the reviews will be displayed maped out on the page from an api*/}
        <p>This is a simple reviews page component.</p>
      </div>
    </div>
  );
}

export default Reviews;