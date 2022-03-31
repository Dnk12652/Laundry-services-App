import React from 'react'
import "../commanComponent/FooterCompo.css"
import insta from "../images/insta.png"
import facebook from "../images/facebook.jpg"
import linkdin from "../images/linkedin.jpg"

function FooterComponent() {
  return (
    <div className="parent">
      <footer className="footer">
      <div className="referal">
        <h1>Now Refer & Earn 500 for every referral*</h1>
        <p>*Terms and conditions will be applied</p>
      </div>
      <div className="socialmedia">
      <div>
        <h2>ABOUT US</h2>
        <p>Doorstep Wash & Dryclean Service</p>
      </div>
      <div>
        <table  cellPadding={12}>
        <thead>
          <tr >
           
            <th>
          <a href='#' style={{color:"black"}}>Home</a>
            </th>
            <th>
            <a style={{color:"black"}} href='#'>Pricing</a>
            </th>
            <th>
            <a style={{color:"black"}} href='#'>Career</a>
            </th>
            <th>
            <a  style={{color:"black"}} href='#'>Contact</a>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
            <a href='#'>SignIn</a>
            </td>
            <td></td>
            <td>
            <a href='#'>Blogs</a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
            <a href='#'>Register</a>
            </td>
            <td></td>
            <td>
            <a href='#'>Create</a>
            </td>
            <td></td>
          </tr>
          </tbody>
        </table>

      </div>
      <div className="images-social">
      <div>SOCIAL MEDIA</div>
        <div className='img'>
          <img src={ facebook}></img>
          <img src={insta}></img>
          <img src={linkdin}></img>
        </div>
      </div>
      </div>
      <div className="copyright">
      2021 &#169; Laundry
      </div>
      </footer>
    </div>
  )
}

export default FooterComponent
