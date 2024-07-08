import Hero from "../About/Hero";
import Category from "../card/Category";
import "../About/Hero.css";
export default function Home(){
    return(
        <>
        <div className="mainone">
        <Hero/>
        </div>
        <Category/>
        </>
    )
}