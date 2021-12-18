import React from "react";
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faSearch, faShoppingCart,faUser} from '@fortawesome/free-solid-svg-icons';
function Header(){
    return(
        <>
          <div className="header">
          <div className="header1">
          <FontAwesomeIcon icon={faStore} size="3x" className="ecom"/>
          <h2><span className="firstLetter">E</span>-Shop</h2>
          </div>
          <div className="header2">
          <h4>Men</h4>
          <h4>Women</h4>
          <h4>Kids</h4>
          </div>
          <div className="header3">
          <FontAwesomeIcon icon={faSearch} className="icon"/>
          <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
          <FontAwesomeIcon icon={faUser} className="icon"/>
          </div>
          </div>
          <div className="Margin">
          </div>
        </>
    );
}

export default Header;