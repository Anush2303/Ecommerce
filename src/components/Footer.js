import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return (
        <div className='footer'>
            <div className='row'>
               <h4 className='back'><FontAwesomeIcon icon={faArrowLeft} className='footericon'/>Back</h4>
            </div>
            <div className='row'>
               <button className="buttoncart_" style={{color:'black'}}>CONTINUE SHOPPING</button>
               <button className="buttoncart" style={{color:'white'}}>PROCEED TO PAYMENT</button>
            </div>
        </div>
    );
}

export default Footer;
