import React from 'react';
import '../css/Form.css';

function Form(){
    return (
        <div className='form_'>
            <button className="buttonform" style={{color:'white'}}>LOG IN</button>
            <button className="buttonform_" style={{color:'black'}}>SIGN UP</button>
            <h4>Shipping Information</h4>
            <form>
            <div className='row form'>
               <input type="text" name="Email" placeholder='Email'className='field'/>
               <input type="text" name="Address" placeholder='Address' className='field'/>
            </div>
            <div className='row form'>
                <input type="text" name="fullname" placeholder='Full Name'className='field'/>
                <input type="text" name="city" placeholder='City'className='field'/>
            </div>
            <div className='row form'>
                <input type="text" name="lastname" placeholder='Last Name'className='field'/>
                <input type="text" name="zip" placeholder='Postal Code/ZIP'className='field'/>
            </div>
            <div className='row form'>
                <input type="text" name="phoneno" placeholder='Phone Number'className='field'/>
                <select id="country" name="Country" className='field'>
                <option value="India">India</option>
                <option value="Poland">Poland</option>
                <option value="Australia">Australia</option>
                <option value="London">London</option>
                </select>
            </div>
            </form>
        </div>
    )
}

export default Form;
