import React from "react";
import Header from './components/Header';
import SubHeader from "./components/SubHeader";
import Form from "./components/Form";
import Payment from "./components/Payment";
import Cart from "./components/Cart";
import Footer from './components/Footer';
import './App.css';

function App(){
  return(
     <>
     <Header/>
     <SubHeader/>
     <div className="row">
         <Form/>
         <Payment/>
         <Cart/>
     </div>
     <Footer/>
     </>
  );
}

export default App;