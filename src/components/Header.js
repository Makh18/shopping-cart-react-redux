import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getNumbers} from '../actions/getAction'
import {Link} from 'react-router-dom'
 function Header(props){   
           useEffect(()=>{
             getNumbers();
           },[])

    return (
        
      <header>
      <div  className="overlay">
      <nav>
      <h2>Shopping</h2>

        <ul>
          <li><Link to="/">Products</Link > </li>
          <li><Link  to="/about">About</Link > </li>
    <li className="cart"><Link  to="/cart"><span>{props.basketProps.basketNumbers}</span><br/><ion-icon name="cart-outline"></ion-icon>Cart</Link> </li>
          
        </ul>
      </nav>
      </div>
    </header>
    )
}
const mapStateToProps=state=>({
  basketProps:state.basketState
})
export default connect(mapStateToProps,{getNumbers})(Header)
