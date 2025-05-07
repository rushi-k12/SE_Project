import React from 'react'
import "../styles/landingpage.css"
import { Link } from 'react-router-dom'

const landingpage = () => {
  return (
    <div class="l-container">
    <div className='l-content'>
        <h1>PriceProphet</h1>
        <p>Unlock insights into cryptocurrency trends with real-time predictions. Get ahead in the market by understanding the future value of your favorite digital assets.</p>
        <div className='l-buttons'>
<Link className='btns' to="/home"><button>
  <span class="text">Continue as Guest</span>
</button></Link>
<Link className='btns'to="/register"><button>
  <span class="text">Login as User</span>
</button></Link>


        </div>
    </div>
    <div className='l-img'>
    <img src='/landingimg.png' alt="" />
    </div>
</div>
  )
}

export default landingpage
