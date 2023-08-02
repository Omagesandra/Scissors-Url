import Logo2 from "../../assets/Logo2.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png"
const Footer = ()=>{
    return(
     <div className="footer">
        <div className="row-one">
            <div className="f-logo">
                <img alt="logo" src={Logo2} />
                <div className="social-media">
                    <img alt="twitter" src={twitter}/>
                    <img alt="instagram" src={instagram}/>
                    <img alt="linkedin" src={linkedin}/>
                    <img alt="facebook" src={facebook}/>
                </div>
            </div>
            <div>
                <h6>Why Scissor</h6>
                <ul>
                    <li className="f-list">Scissor 101</li>
                    <li className="f-list">Integrations & API</li>
                    <li className="f-list">Pricing</li>
                </ul>
            </div>
            <div>
                <h6>Solutions</h6>
                <ul>
                    <li className="f-list">Social Media</li>
                    <li className="f-list">Digital Marketing</li>
                    <li className="f-list">Customer Service</li>
                    <li className="f-list">For Developers</li>
                </ul>
            </div>
            <div>
                <h6>Products</h6>
                <ul>
                    <li className="f-list">Link Management</li>
                    <li className="f-list">QR Codes</li>
                    <li className="f-list">Link-in-bio</li>
                </ul>
            </div>
            <div>
                <h6>Company</h6>
                <ul>
                    <li className="f-list">About Scissors</li>
                    <li className="f-list">Careers</li>
                    <li className="f-list">Partners</li>
                    <li className="f-list">Press</li>
                    <li className="f-list">Contact</li>
                    <li className="f-list">Reviews</li>
                </ul>
            </div>
        </div>
        <div className="row-two">
            <div>
                <h6>Resources</h6>
                <ul>
                    <li className="f-list">Blog</li>
                    <li className="f-list">Resource Library</li>
                    <li className="f-list">Developers</li>
                    <li className="f-list">App Connectors</li>
                    <li className="f-list">Support</li>
                    <li className="f-list">Trust Center</li>
                    <li className="f-list">Browser Extension</li>
                    <li className="f-list">Mobile App</li>
                </ul>
            </div>
            <div>
                <h6>Features</h6>
                <ul>
                    <li className="f-list">Branded Lists</li>
                    <li className="f-list">Mobile Lists</li>
                    <li className="f-list">Campaign</li>
                    <li className="f-list">Management &</li>
                    <li className="f-list">Analytics</li>
                    <li className="f-list">QR Code generation</li>
                </ul>
            </div>
            <div>
                <h6>Legal</h6>
                <ul>
                    <li className="f-list">Privacy Policy</li>
                    <li className="f-list">Cookie Policy</li>
                    <li className="f-list">Terms of Service</li>
                    <li className="f-list">Acceptable Use Policy</li>
                    <li className="f-list">Code of Coduct</li>
                </ul>
            </div>
        </div>
        <div className="signature">
            <p>Term of Service | Security | Scissors 2023</p>
        </div>
     </div>
    )
};
export default Footer;