import { useState,createContext, useEffect } from "react";
import { food_list } from "../assets/asset";
export const StoreContext=createContext(null)

    const StoreContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState({});
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
    };
        const getTotalCartAmount=()=>{
            let totalAmount=0;
            for(
                const item in cartItems
            ){
            if(cartItems[item]>0)
            {
                let itemInfo=food_list.find((product)=>product.id===item)
                totalAmount+=itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
        }

        const contextValue={
            food_list,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            getTotalCartAmount
        }
    return(
<StoreContext.Provider value={contextValue}>
    {props.children}
</StoreContext.Provider>

    );
}
export default StoreContextProvider;