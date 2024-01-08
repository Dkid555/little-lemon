import { Link } from "react-router-dom"
import { SocialIcon } from 'react-social-icons'
export default function Footer() {

    return (
        <footer>
            <img src="/images/footer.png" alt="little lemon"/>
            <div className="footer-content">
                <div className="footer-nav">
                    <p className="footer-head">Navigation:</p>
                    <Link to="/" className="footer-item">Home</Link>
                    <Link to="/about" className="footer-item">About</Link>
                    <Link to="/menu" className="footer-item">Menu</Link>
                    <Link to="/booking" className="footer-item">Reservations</Link>
                </div>
                <div className="footer-contact">
                    <p className="footer-head">Contacts:</p>
                    <address className="footer-item">New York, Manheim 228, B25</address>
                    <address className="footer-item">8-800-555-35-35</address>
                    <address className="footer-item">little.lemon@lemon.com</address>
                </div>
                <div className="footer-social" style={{display: "flex"}}>
                    <p className="footer-head">Social Media:</p>
                    <a href="#" className="footer-item"><SocialIcon style={{height: "20px",width: "20px" }} bgColor="black" fgColor="white" url='https://facebook.com/'/></a>
                    <a href="#" className="footer-item"><SocialIcon style={{height: "20px",width: "20px" }} bgColor="black" fgColor="white" url='https://instagram.com'/></a>
                    <a href="#" className="footer-item"><SocialIcon style={{height: "20px",width: "20px"}} bgColor="black" fgColor="white" url='https://titok.com/'/></a>
                    <a href="#" className="footer-item"><SocialIcon  style={{height: "20px",width: "20px" }} bgColor="black" fgColor="white" url="https://twitter.com" /></a>
                </div>
            </div>
        </footer>
    )
}