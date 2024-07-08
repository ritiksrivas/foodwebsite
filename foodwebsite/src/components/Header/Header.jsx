import "./Header.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faMagnifyingGlass,faCartShopping,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { assets } from "../../assets/asset";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';


export default function Header({setShowLogin})
{
    let [toggle,setToggle]=useState(false);
    function openmenu(){
        setToggle(true);
    }
    function closemenu(){
        setToggle(false);
    }

    return(
        <nav>
            <div>
        <img src={assets.chefhat} alt="chefhat" />
        <Link to="/"><img src={assets.Foo} alt="foologo" /></Link>
        </div>
        <div className="main">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
            <button id="login" onClick={()=>setShowLogin(true)}>Login</button>
        </div>
       
        <div className="search">
            <div className="cart">
                <Link to='/cart'>
                <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#06090f",}} />
                

                </Link>
            </div>
        </div>
        <div className="hidden-menu">
            {toggle ? (<div className="list_link">
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/menu">Menu</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
                <button id="login" onClick={()=>setShowLogin(true)}>Login</button>
            </ul>
        </div>):
        (
        <div></div>
    )}
        </div>
        <div className="menu">
            {toggle?(<FontAwesomeIcon onClick={closemenu} icon={faCircleXmark} />):
        (<FontAwesomeIcon onClick={openmenu} icon={faBars} />)}
        </div>
    </nav>
    );
}