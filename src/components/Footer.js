import './Footer.css';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
function Footer(){
    return (
        <>
        <div className="footer">
            <div className="footer-logo">
             <img src="https://sbpl.in.net/uploads/orgnization/SBPLi-web.png" alt="Sundarban Chemicals Pvt. Ltd. Sundarban Chem" />
            </div>
            <div className="contact-info"> 
                <h2>Contact details : </h2>
                <div className='divider1'></div>
                <ul className="contact-list">
                    <li className='phone'><CallIcon></CallIcon>  <span > +91 33 40046263</span></li>
                    <li><EmailIcon/> <span>contact@sbpl.in.net</span></li>
                </ul>
                <h4>Open hours :</h4>
                <ul className='timing' style={{listStyle : "none"}}>
                    <li>Mon - Sat: 10 am - 6 pm</li>
                    <li>Sunday: CLOSED</li>
                </ul>
             </div>
            <div className="map"></div>
        </div>
        <div className='footer-bottom'>
            <div className='dividor2'></div>
            <div class="copyright">© 2022 Sundarban Chemicals Pvt.  Ltd. Sundarban Chem - All rights reserved. </div>
        </div>
        </>
        
    );
}
export default Footer;