"use client";

import '../css/nav-bg.scss';
import BasicMenu from './start-menu';

 
function Nav() {
    return (
        <nav>
            <div className="nav-bg">
                <BasicMenu />
                <button className="time-tab">11:26</button>
            </div>
        </nav>
    );
};

export default Nav;
        
        