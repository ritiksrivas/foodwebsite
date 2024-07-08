import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./Cart.css";
 export default function Cart(){
   const{cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext);
    return(
        <div className="addcart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Titles</p>
                    <p>price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                  <hr />
                  {food_list.map((item,index)=>{
                    if(cartItems[item.id]>0)
                        {
                            return(
                                <div>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{cartItems[item.id]}</p>
                                    <p>{item.price*cartItems[item.id]}</p>
                                    <button onClick={()=>removeFromCart(item.id)}>Remove</button>
                                </div>
                                <hr />
                                </div>
                            )
                        }
                  })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total </b>
                            <b>{getTotalCartAmount()+2}</b>
                        </div>
                    </div>
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    );
}