import './Header.css'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src="" alt="" className="header__logo" />
        <h1 className="header__name">E.R. Automotive Clinic</h1>
      </div>
      <div className="header__navbar">
        <ul className="navbar__links">
          <li className="navbar__link"><Link to="/"><p className="navbar__text">Home</p></Link></li>
          <li className="navbar__link"><Link to="/about"><p className="navbar__text">About</p></Link></li>
          <li className="navbar__link"><Link to="/gallery"><p className="navbar__text">Gallery</p></Link></li>
          <li className="navbar__link"><Link to="/reviews"><p className="navbar__text">Reviews</p></Link></li>
        </ul>
      </div>
      <div className="header__call-btn">
        <button className="call-btn"> <img src="src/assets/phone.svg" alt="small phone icon" className="header__call-logo" /> Call Now</button>
      </div>
    </header>
  )
}

export default Header;