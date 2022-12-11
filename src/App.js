import React,{useEffect,useContext} from "react";
import Main from "./components/Mainpage/main";
import Login from "./components/LoginPage/login";
import Signup from "./components/SignupPage/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {context, firecontext}   from "./store/context";

function App() {
  const{user,setUser}=useContext(context)
  const{firebase}=useContext(firecontext)

  useEffect(()=>{

    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  })
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
