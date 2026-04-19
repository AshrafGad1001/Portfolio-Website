import React from "react";
import { useState } from "react";
import './header.css';

const Header = () => {


    const [showpopup, setshowpopup] = useState(false);



    return (
        <header className="flex">
            <button className="menu icon-menu" onClick={() => {
                setshowpopup(true);
            }}>
            </button>
            <div />
            <nav>
                <ul className="flex">
                    <li><a href="">About</a></li>
                    <li><a href="">Article</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>

            <button className="themes">
                <span className="icon-weather-sunny"></span>
                {/* <span className="icon-moon-o"></span> */}
            </button>


            {
                showpopup && (<div className="fixed">
                    <ul className="pop-up">
                        <li>
                            <button className="icon-times" onClick={() => {
                                setshowpopup(false);
                            }}>
                            </button>
                        </li>
                        <li><a href="">About</a></li>
                        <li><a href="">Article</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Speaking</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>

                </div>)
            }
        </header>
    );
}




export default Header;