import { useContext} from "react";
import "./Card.css";
import React from "react";
import { StoreContext } from "../../Context/StoreContext";
export default function Card({id,name,image,price})
{
const{cartItems,addToCart,removeFromCart}=useContext(StoreContext);
    return(
        <div className="card">
            <div className="card-image">
                <img src={image} alt="food" />
            </div>
            <div className="card-description">
                <div className="card-name">
                    <h3>{name}</h3>
                    <p>Rs {price}</p>
                </div>
                {
                !cartItems[id]?
                <div className="card-button">
                   <button id="add-button" onClick={()=>addToCart(id)}>Add</button>
                </div>:
                <div className="card-button-add">
                    <div className="btn">
                    <button  onClick={()=>removeFromCart(id)}>-</button>
                    </div>
                    <div className="num">
                    <p>{cartItems[id]}</p>
                    </div>
                    <div className="btn">
                    <button  onClick={()=>addToCart(id)}>+</button>
                    </div>
                </div>
}
            </div>
        </div>
    );
}