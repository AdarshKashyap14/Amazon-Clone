import React ,{useEffect}from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51MmEegSGSZ2VwHLdQ95IBB01ghe6a5o93rNAx8jDg7aiuP8ODtk8MlejdQtKT80apRUNiGOPaSaEiVdKp14Dl65v00OkNo1AP8');



function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        console.log('THE USER IS >>>', authUser)
        if(authUser){
          //the user just logged in / the user was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          });

        }else{
          //the user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          });
        }
      });
  },[dispatch]);


  return (
    <Router>
     
    <div className="App">
      <Routes>
      <Route path="/" element={<Header />} />

      </Routes>
      <Routes>
      <Route path="/checkout" element={<Header />} />

      </Routes>
      <Routes>
      
      <Route path="/payment" element={<Header />} />
      </Routes>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/payment" element={<Elements stripe={promise}> <Payment/> </Elements>} />
      


      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
