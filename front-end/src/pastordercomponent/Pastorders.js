import React, {useEffect, useState} from 'react'
import '../pastordercomponent/Pastorders.css'
import axios from 'axios'
import Rowcomponent from '../pastordercomponent/Rowcomponent'
import homebtn from '../images/side-bar-home.png'
import { useHistory } from 'react-router-dom'
import more from '../images/side-bar-more.png'
import list from '../images/side-bar-plus.png'
import { getToken } from "../utils/authenticationOperations";
import Orderheadercompo from "../commanComponent/OrderHeaderCompo"
import OrderFootercompo from '../commanComponent/OrderFootercompo'
import Order_Side_Bar from '../commanComponent/Order_Side_Bar'
const andvar = '&'
function Pastorders() {
  const history = useHistory()
  const [orderedItems, setOrderedItems] = useState([])
  const [orderLength, setOrderLength] = useState(0)
  const routeToCreateOrdersPage = () =>{
   history.push('/orderlists')
  }
  
  const currToken = getToken()
  useEffect(() =>{
    axios.get(`http://localhost:5000/orders`,{
      headers:{
        Authorization: 'Bearer '+ currToken
      }
    }).then((res)=>{
      setOrderedItems(res.data.orders)
      console.log(res)
    
      setOrderLength(res.data.orders.length)
      console.log(orderLength)      
    })
  },[orderLength])

  return (
  <>
  < Orderheadercompo/>
    {/* <div className='title-laundry-bar'></div>
    <div className='laundry'>LAUNDRY</div>
    <div className='pricing'>Pricing</div>
    <div className='career'>Career</div>
    <div className='lastnav' onClick={logout}></div>
    <img className='usernameimg' src={username} onClick={logout} />
    <div className='usernameonly' onClick={logout}>Logout</div> */}
    {/* <div className='sidenavbar'></div> */}
    <div className='createbox' onClick={routeToCreateOrdersPage}></div>
    <div className='create' >Create</div>
    {/* <img src={homebtn} className='homesidebtn' onClick={routeToHome}/> */}
    {/* <img src={more} className='morebtn' onClick={routeToCreateOrdersPage}/>
    <img src={list} className='listbtn'/> */}
    <Order_Side_Bar/>
   <OrderFootercompo/>

    {orderLength && 
    <div>
      <div className='orders'>Orders | {orderLength}</div>
      
      <input className='search' value=''/>
        <div className='main-header'></div>
        <div className='order-id'>
          OrderID
        </div>
        <div className='orderdateandtime'>
          Order Date {andvar} Time
        </div>
        <div className='storelocationclass'>
          Store Location
        </div>
        <div className='city'>
          City
        </div>
        <div className='storephone'>
          Store Phone
        </div>
        <div className='totalitems'>
          Total Items
        </div>
        <div className='price'>
          price
        </div>
        <div className='status'>
          Status
        </div>
        <div className='forcancel'>

        </div>
        <div className='view'>
          view
        </div>
      <div className='mapdiv'>
      { orderedItems.map((eachItem)=>{       
          return <Rowcomponent key={eachItem._id} {...eachItem} />
        })}
      </div>
      
    </div>
    }
  </>
  )
}
export default Pastorders