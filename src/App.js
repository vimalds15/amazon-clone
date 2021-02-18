import React,{useEffect} from "react";
import "./App.css";
import { auth } from './components/firebase';
import Login from './components/Login';
import Header from "./components/Header.js";
import Checkout from './components/Checkout';
import Home from "./components/Home.js";
import {useStateValue} from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
  //load only once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
       
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
          <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
