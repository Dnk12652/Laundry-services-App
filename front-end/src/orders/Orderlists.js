import React,{useState} from 'react'

import {useHistory,Link} from "react-router-dom"
import "../orders/Orderlists.css"
import Product_type_lists from './Product_type_lists'
import OrderHeaderCompo from '../commanComponent/OrderHeaderCompo';
import OrderFootercompo from '../commanComponent/OrderFootercompo';
import Order_Side_Bar from '../commanComponent//Order_Side_Bar';
import Searchcompo from '../commanComponent/Searchcompo';
import SummaryToCreate from "../Summary/SummaryToCreate"





let totalorders={ orderId: "orderId", userId: "userId",details: new Map()  }
let OrderedItems=[]
function Orderlists() {
  const [showSummary,setSummary]=useState(false)
  const [summaryIsOpen, setSummaryIsOpen] = useState(false);

  const toggleSummaryPopup = () => {
    setSummaryIsOpen(!summaryIsOpen)
}



 function  callbackFunction(props){
  totalorders.details.set(props.productType,props.value)
 OrderedItems = [...totalorders.details].map(([ productType,value])=>({
    productType,
      value,
    }))

return 
  }
 
  const orderdata = [
        {
        productname :'shirts',
        description:"selcet noof shirts to placeorder to laundry ",
        image:'https://th.bing.com/th/id/OIP.kZUnFP1eViE_45Y_czSNbgHaLH?pid=ImgDet&rs=1',
        id:1
        },
      {
      productname :'Tshirts',
      description:"selcet noof Tshirts to placeorder to laundry ",
      image:'https://th.bing.com/th/id/OIP.gtRV3hBK_e7BhJsLoTkTuAHaI4?pid=ImgDet&rs=1',
      id:2
        },
        {
        productname :'Trousers',
        description:"selcet Trousers shirts to placeorder to laundry ",
        image:'https://th.bing.com/th/id/OIP.yCMVmqhpIPDcGRdQA7uiswHaJ4?pid=ImgDet&rs=1',
        id:3
          },
      {
        productname :'Jeans',
        description:"selcet noof Jeans to placeorder to laundry ",
        image:'https://th.bing.com/th/id/OIP.bkNXpIdRAszLa8_BWYWQlgHaMH?pid=ImgDet&rs=1',
        id:4
          },
          {
            productname :'Boxers',
            description:"selcet noof Boxers to placeorder to laundry ",
            image:'https://th.bing.com/th/id/OIP.0rS-XGejGDz2fga7UeptsgHaH3?pid=ImgDet&rs=1',
            id:5
          },
          {
          productname :'Joggers',
          description:"selcet noof Joggers to placeorder to laundry ",
          image:'https://th.bing.com/th/id/OIP.-1XpE5CXYnblCkXoWUrvIwHaIY?pid=ImgDet&rs=1',
          id:6
          },
          {
          productname :'others',
          description:"selcet noof others to placeorder to laundry ",
          image:'https://th.bing.com/th/id/OIP.nPcc7GDQZfugMeQr9RoSnQHaHU?pid=ImgDet&w=800&h=790&rs=1',
          id:7
          },
    ]
  return (
    <div className='parent-orderlists'>
   <OrderHeaderCompo />
     <Order_Side_Bar/>
      <div className='orderlists-table'>
          <div className='create-order-page'>
               <div className='ordercount-search'>
                 <h2>Create Order</h2>
         <Searchcompo/>
                    
                </div>
                <div  className='table-orderlists'>
                  <table cellSpacing={0} className='table-orderlists-inside'  >
                    <thead>
                      <tr className='table-head'>
                        <th>Product Types</th>
                        <th>Quantity</th>
                        <th colSpan={4}>Wash type</th>
                        <th colSpan={2}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                  { orderdata.map((data)=>{
                
                 return( <Product_type_lists
                  
                     
                       image={data.image}
                       description={data.description}
                       productType={data.productname}
                       gettingOrders={ callbackFunction}
                       />
                   ) })}
                    
                    </tbody> 
                  </table>
                </div>

            </div>
      
          </div>
          <div  className='proceed-cancel-btn'>
              <button className='cancel-btn'>Cancel</button>
              <button onClick={()=>{setSummary(true)}} className='order-lists-proceed-btn'>Proceed</button>
            </div>

          {showSummary && <SummaryToCreate showSummary={showSummary}
                  handleSummaryClose={toggleSummaryPopup} 
                  totalcost={ OrderedItems
                    .map((order) => order.value.price)
                    .reduce(
                    (totalprice, currentprice) =>totalprice + parseInt( currentprice, 10), 0)}
                    OrderedItems={OrderedItems}
                    totalquantity={ OrderedItems
                      .map((order) => order.value.quantity)
                      .reduce(
                      (totalquan, currentquan) =>totalquan + parseInt( currentquan, 10), 0)}
            
                    />}
      <OrderFootercompo/>
      
    </div>
  )
}

export default Orderlists
