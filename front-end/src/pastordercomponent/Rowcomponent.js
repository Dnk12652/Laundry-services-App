import React, { useState, useEffect } from "react";
import "../pastordercomponent/Rowcomponent.css";
// import moment from "moment";
import viewicon from "../images/eye1.png";
import axios from "axios";
import Summarypopup from '../pastordercomponent/Summarypopup'
import "../pastordercomponent/Cancelpopup.css";
import "../pastordercomponent/Summarypopup.css"
import { useHistory} from "react-router";
import Calculationcomponent from "../pastordercomponent/Calculationcomponent";
import alert from '../images/warning.jpg'
import Cancelpopup from '../pastordercomponent/Cancelpopup'
import { getToken } from '../utils/authenticationOperations';


function Rowcomponent(props) {
  // console.log(props)
 const  history = useHistory()
  const [summaryItems, setSummaryItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isCancel, setIsCancel] = useState(false)
  // const navigate = useNavigate();
  // const totalwithoutpickup = summaryItems.map((item)=>item.price).reduce((acc,cost)=>acc+parseInt(cost),0)
  // console.log(totalwithoutpickup)

  const count = 0;
  const currToken = getToken()
  const showSummaryHandler = () => {
   console.log(props._id)
    axios.get(`http://localhost:5000/orders/${props._id}`, {
        headers: {
          Authorization: "Bearer " + currToken,
        },
      })
      .then((res) => {
        console.log(res.data.orders.order_details);
        setSummaryItems(res.data.orders.order_details);
        setIsOpen(!isOpen);
      });
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const cancelHandler = () =>{
    if (isOpen === true){
      setIsOpen(!isOpen)
    }
    setIsCancel(!isCancel)
  }

  const updateStatus = async () => {
    console.log(props._id)
    await axios.put(`http://localhost:5000/orders/${props._id}`, {}, {    
        headers: {
          Authorization: "Bearer " + currToken,
        },
      }).then(res => {
                console.log(res);
                cancelHandler()
                window.location.href='/orderPage';
            })
            .catch(err => console.log(err)
            );
  }

  return (
    <div className="each-order">
      <p className="rcorderid">{props.order_id}</p>
      <pre>       </pre>
      <p className="rcorderdateandtime">ddd
        {/* {moment(props.createdAt).format("DD MMM YYYY,HH:mm")} */}
      </p>
      <pre>           </pre>
      <p className="rcstorelocation">koti</p>
      <pre>         </pre>
      <p className="rccity">hyderabad</p>
      <pre>           </pre>
      <p className="rcstorephone">9999999999</p>
      <pre>           </pre>
      <p className="rctotalitems">{props.totalquantity}</p>
      <pre>               </pre>
      <p className="rctotalprice">{props.totalcost}</p>
      <pre>           </pre>
      <p className="rcstatus">{props.status}</p>
      
      {props.status === "ready to pick" && (<>
        <pre>     </pre>
        <p className="rcforcancel" onClick={cancelHandler}>
          cancel order
        </p>
        <pre>   </pre>
        <input
        type="image"
        src={viewicon}
        className="rcview"
        onClick={showSummaryHandler}/>

        </>
        
      )}

      {props.status === "cancelled" && (<>
      <pre>                  </pre>
      <input
        type="image"
        src={viewicon}
        className="rcview"
        onClick={showSummaryHandler}
      />

      </>)}
      
      {isOpen && (
        <Summarypopup
          content={
            <>
              <div className="bluehead">
                <div className="summarytext">Summary</div>
              </div>
              <div className="lightbluehead">
                <div className="leftchild">
                  <div className="newstore">Store Location</div>
                  <div className="newkoti">Koti</div>
                </div>
                <div className="middlechild">
                  <div className="newstore">Store Address:</div>
                  <div className="newkoti">Near Gokul Chat</div>
                </div>
                <div className="rightchild">
                  <div className="newstore">Phone</div>
                  <div className="newkoti">91 9999999999</div>
                </div>
              </div>
              <hr className="hline"></hr>
              <div className="orderdetails">Order Details</div>              
              
              <div className="dynamicorders"> 
                {summaryItems.map((item) => {
                  return <Calculationcomponent {...item} />;
                })}
              </div> 
              <hr className="hline"></hr>
              <span className="sub-total">Sub total: </span>

              {/* <span>{summaryItems.map((item)=>item.price).reduce((acc,cost)=>acc+parseInt(cost),0)}</span> */}
              <div className="pickup-charges"></div>
              <span className="pickup-charges">Pickup Charges:</span>
              <span>90</span>
              <div className="total-cost">
                {/* <div className="innertotalcost">Total:{totalwithoutpickup+90}</div> */}
              </div>
              <div className="address-bottom">Address</div>
              <div className="outer-add-box">
                <div className="home-in-address">Home</div>
                <div className="street-in-address">Near Gokul Chat, koti, Hyderabad</div>

              </div>

              {props.status === "ready to pick" && <input
                type="button"
                value="cancel order"
                className="cancel-btn-active" 
                onClick={cancelHandler}
              />}
            </>
          }
          handleClose={togglePopup}
        />
      )}


      {isCancel && <Cancelpopup
      content={<>
        <div className="purpleheader"></div>
        <div className="alertheader">Alert</div>
        <div className="suretocancel">Are you sure you want to cancel the order No:{props.order_id}</div>
        <img className="alert-image" src={alert}></img>
        <button className='proceed-btn' onClick={updateStatus}>Proceed</button>
      </>}
      handleClose={cancelHandler}
    />}
    </div>
  );
}
export default Rowcomponent;