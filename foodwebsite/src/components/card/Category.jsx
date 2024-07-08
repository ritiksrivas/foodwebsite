import React,{useContext} from "react";
import Card from "./Card";
import { StoreContext } from "../../Context/StoreContext";

export default function Category()
{
    const {food_list}=useContext(StoreContext)
    return(
        <>
        <div className="category">
            <h1>Top Items</h1>
            <div className="container">
                {food_list.map((item,index)=>{
                    return <Card key={index} id={item.id} name={item.name} price={item.price} image={item.image}/> 
                })}
            </div>
            </div >
        </>
    );
}
