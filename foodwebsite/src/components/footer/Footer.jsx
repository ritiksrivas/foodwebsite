import { assets } from "../../assets/asset";

export default function Footer()
{
    return (
        <div className="foot">
            <div className="foot1">
            <img src={assets.chefhat} alt="chefhat" />
        <img src={assets.Foo} alt="foologo" />
        <p>2024 HS Technology private limited</p>
            </div>
            <div className="foot2">
                <ul>
                    <h3>Company</h3>
                    <li><a href="">About</a></li>
                    <li><a href="">Careear</a></li>
                    <li><a href="">Team</a></li>
                </ul>
            </div>
            <div className="foot3">
                <h3>Contact us</h3>
                <ul>
                <li><a href="">Help and support</a></li>
                <li><a href="">instagram</a></li>
                <li><a href="">facebook</a></li>
                </ul>
            </div>
            <div className="foot4">
                <h3>Legal</h3>
                <ul>
                    <li>Terms and Condition </li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    );
}