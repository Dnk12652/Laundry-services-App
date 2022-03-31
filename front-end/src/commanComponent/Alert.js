import React from 'react'
import "../commanComponent/alert.css";
import warning from "../images/warning.jpg"
import axios from "axios";




function Alert(props) {

    const updateStatus = () => {
        const token = localStorage.getItem("token");
        let config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }

        let id=props.id;
        axios.put(`https://backend-laundry.herokuapp.com/orders/${id}`, {}, config)
            .then(res => {
                props.handleClose();
                window.location.href = '/orderPage';
            })
            .catch(err => console.log(err)
            );
    }


    return (
        <div className='popup-box'>
            <div className='alert__box'>
                <div className='alert__header'>
                    Alert
                    <button className='btn__close' onClick={props.handleClose}>x</button>
                </div>

                <div className='alert__content'>
                    <div>
                        <img className='warning__icon' src={warning} alt="warning" />
                    </div>
                    <div>
                        <p className='alert__message'> Are you sure you want to cancel the
                            <br></br>
                            order No:OR000{props.content}
                        </p>

                        <div onClick={updateStatus} className='btn-parent'>
                            <button className='btn__close'>Proceed</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Alert