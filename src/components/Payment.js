import React from 'react';
import {Visa, Mastercard,Paypal,Maestro,Discover,Amazon,Cirrus,Googlepay,Skrill} from "react-pay-icons";
import '../css/Payment.css';


function Payment(){
    return (
        <div className='payment'>
            <h4>Payment methods</h4>
            <div className='row'>
            <Paypal style={{width: 100 }} className="pay"/>
            <Visa style={{width: 100 }} className="pay"/>
            <Mastercard style={{width: 100 }} className="pay"/>
            </div>
            <div className='row'>
            <Maestro style={{width: 100 }} className="pay"/>
            <Discover style={{width: 100 }} className="pay"/>
            <Amazon style={{width: 100 }} className="pay"/>
            </div>
            <h4>Delivery Method</h4>
            <div className='row'>
            <Cirrus style={{width: 100 }} className="pay"/>
            <Googlepay style={{width: 100 }} className="pay"/>
            <Skrill style={{width: 100 }} className="pay"/>
            </div>
        </div>
    );
}

export default Payment;
