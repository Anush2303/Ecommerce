import React from 'react';
import '../css/SubHeader.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart,faTruck} from '@fortawesome/free-solid-svg-icons';

function SubHeader(){
    return (
        <div>
           <div className='subheader'>
               <div className='heading'>
               <h4>Shipping and Payment</h4>
               </div>
               <div className='header3'>
               <FontAwesomeIcon icon={faShoppingCart} className="icon_"/>
               <FontAwesomeIcon icon={faTruck} className='icon_'/>
               </div>
           </div> 
        </div>
    );
}

export default SubHeader;
