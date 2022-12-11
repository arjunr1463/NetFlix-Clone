import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { firecontext } from "./store/context";
import firebase from "./components/firebase/config";
import App from "./App";
import Display from "./store/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <firecontext.Provider value={{ firebase }}>
    <Display><App /></Display>
    
    
    
  </firecontext.Provider>
);
