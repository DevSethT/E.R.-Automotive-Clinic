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
        <Link to="/"><p className="navbar__link">Home</p></Link>
        <Link to="/about"><p className="navbar__link">About</p></Link>
        <Link to="/gallery"><p className="navbar__link">Gallery</p></Link>
        <Link to="/reviews"><p className="navbar__link">Reviews</p></Link>
      </div>
      <div className="header__call-btn">
        <button className="call-btn">Call Now</button>
      </div>
    </header>
  )
}

export default Header;