import React from 'react'
import { removeToken } from '..//utils//authenticationOperations';

function orderHeaderCompo() {
  return (
    <div>
        <div class="header">
     <div class="nav-bar">
        <h1>Laundry</h1>
      </div>
      <div class="navbar">
          <a href="#"><p>Pricing</p></a>
          <a href="#"><p>Career</p></a>
          <a className='logout' onClick={() => { removeToken() }} href="/">Logout</a>
      </div>
      </div>
    </div>
  )
}

export default orderHeaderCompo
