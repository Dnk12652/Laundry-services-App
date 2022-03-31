import React from 'react'

//import Sidebar from '../components/Side-bar'
import "../orders/Createorder.css"
import OrderHeaderCompo from '../commanComponent/OrderHeaderCompo'

import {useHistory,Link} from "react-router-dom"
import Order_Side_Bar from '../commanComponent/Side-bar';
import OrderFootercompo from '../commanComponent/OrderFootercompo'
import Searchcompo from '../commanComponent/Searchcompo'


function Createorder() {
   const history = useHistory()
   const changeRoute=()=>{
       history.push('/orderlists')
   }

  return (
    <div className='parent-create-order'>
      <OrderHeaderCompo/>
       <div  className='side-bar-btn'>
          <Order_Side_Bar/>
           <div className='create-order-page'>
               <div className='ordercount-search'>
                 <h2>Orders | 0</h2>
        <Searchcompo/>
                    
                </div>
            </div>
                
               </div>
               <div className='create-order-btn'>
                <button onClick={changeRoute}>Create</button>
               </div>
         <OrderFootercompo/>
           </div>
    
      
      
      
   
  )
}

export default Createorder
