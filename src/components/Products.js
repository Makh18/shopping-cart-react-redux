import React from 'react'
import t1 from '../images/t1.png'
import t2 from '../images/t2.png'
import t3 from '../images/t3.png'
import {connect} from 'react-redux';
import {addBasket} from '../actions/addAction'

const Products=(props) => {
       console.log(props);

    return (
        <div className="container">
            <div className="product">
                <img src={t1}></img>
                <div className="product-details">
                <h3>Grey Tshirt</h3>
                <h3>$60,00</h3>
                <a onClick={()=>props.addBasket('GreyTshirt')} href="#" className="addtocart cart1"><ion-icon name="cart-outline"></ion-icon>Add to cart</a>
                </div>
            </div>
            <div className="product">
                <img src={t2}></img>
                <div className="product-details">

                <h3>Green Tshirt</h3>
                <h3>$60,00</h3>
                <a onClick={()=>props.addBasket('GreenTshirt')} href="#" className="addtocart cart1"><ion-icon name="cart-outline"></ion-icon>Add to cart</a>
                </div>
            </div>
            <div className="product">
                <img src={t3}></img>
                <div className="product-details">
                <h3>Pink Tshirt</h3>
                <h3>$60,00</h3>
                <a onClick={()=>props.addBasket('PinkTshirt')} href="#" className="addtocart cart1"><ion-icon name="cart-outline"></ion-icon>Add to cart</a>
            </div>
            </div>
        </div>
    )
}
export default connect(null,{addBasket})(Products)