import React from 'react'
import { Link } from 'react-router-dom';

function Order_Side_Bar() {
    return (
      <div className='sidebarparent_div'>
        <div className='sidebarnav_home'></div>
        <Link to="/orders"><div className='sidebarnav_create'></div></Link>
        <Link to="/orderPage"><div className='sidebarnav_show'></div></Link>
    </div>
  )
}

export default Order_Side_Bar
