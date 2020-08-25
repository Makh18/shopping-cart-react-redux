import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {productQuantity} from '../actions/productQuantity'
import greyTshirt from '../images/t1.png'
import greenTshirt from '../images/t2.png'
import pinkTshirt from '../images/t3.png'

function Cart({basketProps, productQuantity}) {
    console.log(basketProps);
    let productsInCart=[];
    Object.keys(basketProps.produits).forEach(function(item)
    {
        console.log(item);
        console.log(basketProps.produits[item].inCart);
        if(basketProps.produits[item].inCart){
            productsInCart.push(basketProps.produits[item])
        }
        console.log(productsInCart)
    }
    )
    //const productImages=[t1,t2,t3];
    const productImages=(product)=>{
        if(product.tagName==='greyTshirt'){
            return greyTshirt;    
        } else if(product.tagName==='greenTshirt'){
            return greenTshirt;  
        } else if(product.tagName==='pinkTshirt'){
          return pinkTshirt;  
    }
}
         
    productsInCart=productsInCart.map((product,index)=>{
        console.log("myproduct is");
        console.log(product)
        return(
            <Fragment key={index}>
            <div className="product1"><ion-icon name="close-circle"></ion-icon>
            <img src={productImages(product)}></img>
        <span className="sm-hide">{product.name}</span>
            </div>
        <div className="price sm-hide">${product.price},00</div>
        <div className="quantity">
            <ion-icon onClick={()=>productQuantity('decrease', product.name)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
        <span>{product.numbers}</span>
        <ion-icon onClick={()=>productQuantity('increase', product.name)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
        </div>
        <div className="total">${product.numbers*product.price},00</div>
            </Fragment>

        )
    });
    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">Product</h5>
                <h5 className="price sm-hide">Price</h5>
                <h5 className="quantity">Quantity</h5>
                <h5 className="total">ToTal</h5>

            </div>
            <div className="products">
                {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="baskeTotalTitle"> Total Price:  </h4>
                <h4 className="basketTotal">${basketProps.cartCost},00</h4>
            </div>
        </div>
    )
}
const mapStateToProps=state =>({
    basketProps : state.basketState

});

export default connect(mapStateToProps, {productQuantity})(Cart);
