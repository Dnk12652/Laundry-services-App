import React from 'react';
import "../commanComponent/side-bar.css";
import { Link } from 'react-router-dom';


function Sidebar(props) {
    return (
        <div className='sidebarparent_div'>
            <div className='sidebarnav_home'></div>
            <Link to="/orders"><div className='sidebarnav_create'></div></Link>
            <Link to="/orderPage"><div className='sidebarnav_show'></div></Link>
        </div>
    );
}

export default Sidebar;