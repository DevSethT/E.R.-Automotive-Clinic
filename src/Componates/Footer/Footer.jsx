import './Footer.css'

function Footer (){
    return (
        <footer className="footer">
            <div className="footer__text">
            <p>&copy; 2023 E.R. Automotive Clinic. All rights reserved.</p>
            </div>
            <div className="footer__location">
                <a href="https://maps.app.goo.gl/tutG5StSgCy257Su6" className="footer__location-link"><img src="src/assets/location.svg" alt="location icon" className="footer__location-img" /> 2730 HWY 12 STE #1 </a>
            </div>
            <div className="footer__email">
                <a href="mailto:info@erautomotiveclinic.com" className="footer__email-link"><img src="src/assets/email.svg" alt="email icon" className="footer__email-img" /> info@erautomotiveclinic.com</a>
            </div>
            <div className="footer__phone">
                <a href="tel:409-499-7634" className="footer__phone-link"><img src="src/assets/phone.svg" alt="phone icon" className="footer__phone-img" /> (409) 499-7634 </a>
            </div>
            <div className="footer__links-container">
                <ul className="footer__links">
                    <li className="footer__link"><a className="footer__link-text" href="#"><img src="src/assets/facebook.svg" alt="Facebook logo" className="footer__link-logo" />FaceBook</a></li>
                    <li className="footer__link"><a className="footer__link-text" href="#"><img src="src/assets/tiktok.svg" alt="TikTok logo" className="footer__link-logo" />TikTok</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;