import { assets } from "../../assets/asset";
import "./Hero.css";
export default function Hero()
{
    return(
    <div className="hero">
        <div className="text">
            <img id="fast" src={assets.Fast} alt="fast" />
            <img id="fast" src={assets.FoodDelivery} alt="fast" />
            <p>Sed ut perspiciatis unde omnis iste natus sit<br/>
                 voluptatem accusantium doloremque laudantium</p>
                 {/* <Link to="/"><button id="order">Order Now</button></Link> */}
                 <br />
                 <img id="rating" src={assets.rating}alt="" />
        </div>
        <div className="foodimg">
            <img src={assets.all} alt="foodmain" />
        </div>
    </div>

);
}