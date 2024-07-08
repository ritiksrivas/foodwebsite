import "./Signup.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faUser,faLock} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
export default function Signup({setShowLogin})
{
    const[currState,setCurrState]=useState("Login");
    return(
        <>
        <div className="signup">
        <div className="content">
        <FontAwesomeIcon id="cross" onClick={()=>setShowLogin(false)} icon={faXmark} />
            <div className="text">
            <h2>{currState}</h2>
            </div>
            <form action="#">
                <div>
                {currState==="Login"?<></>:<div><input type="text" required/>
                    <lable>Email or Phone</lable></div>}
                <div className="field">
                    <input type="text" required/>
                    <span ><FontAwesomeIcon icon={faUser}/></span>
                    <lable>Email or Phone</lable>
                </div>
                <div className="field">
                    <input type="password" required/>
                    <span><FontAwesomeIcon icon={faLock} /></span>
                    <lable>Password</lable>
                    </div>
                    <div className="forgot-pass">
                        <a href="">Forgot Password?</a>
                    </div>
                    </div>
                    <button id="sign">{currState==="Sign Up"?"Create account":"Login"}</button>
                    <div className="sign-up">
                        Not a member?
                        {currState==="Login"?
                        <a href="" onClick={()=>setCurrState("Sign Up")}>signup now</a>:<></>}
                    </div>

            </form>
        </div>
    </div>
        </>
    );
}