import React from 'react';
import '../css/Cart.css'
import Card from './Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruck} from '@fortawesome/free-solid-svg-icons';

function Cart(){
    return (
        <div className='cart'>
            <h4>Your Cart</h4>
             <div className='row'>
              <img src="https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-1-1610963787.jpg" className="brand" alt="img" />
               <Card item="T-Shirt" title="Summer Vibes" id="#261311"/>
                <h6 className='price_'>$89.99</h6>  
            </div>
            <div className='row'>
               <img src="https://ds393qgzrxwzn.cloudfront.net/resize/c500x500/cat1/img/images/0/DqaFkZBUxM.jpg" className="brand" alt="img" />
               <Card item="Fit T-Shirt" title="Basic slim" id="#212315"/>
               <h6 className='price'>$69.99</h6>  
            </div>
            <div className='row'>
                <button className="buttonring_" style={{color:'white'}}>Total Cost {<span className="total">$159.98</span>}</button>
            </div>
            <div className='row free'>
                <FontAwesomeIcon icon={faTruck} className='cartIcon'/>
                <h5 className='free_'>You are {<span className="discount">$30.02</span>} away from free shopping!</h5>
            </div>
            </div>
    );
}

export default Cart;
