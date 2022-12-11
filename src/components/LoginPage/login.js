import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/bg.png";
import { firecontext } from "../../store/context";

function Login() {
  const { firebase } = useContext(firecontext);
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  

  const handle = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        navigate("/main");
      }).catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
      className=" flex items-center justify-center"
    >
      <div className="bg-black/40 w-[20vw] h-[40vh] rounded-[0.5rem] mb-20">
        <div className="flex flex-col items-center text-white ">
          <h className="text-[30px] font-bold">LOGIN</h>
          <h className="font-serif">Welcome!!!</h>
        </div>
        <form onSubmit={handle}>
          <div className="flex flex-col gap-3 px-4 mt-7">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              className="h-[5vh] rounded-[0.5rem] text-[18px] font-semibold outline-none placeholder-black/40 block px-2"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              className="h-[5vh] rounded-[0.5rem] text-[18px] font-semibold outline-none placeholder-black/40 block px-2"
            />
          </div>
        
        <div className="flex justify-center items-center mt-5">
          <div className="bg-white/70 rounded-[0.2rem] w-20 flex justify-center items-center hover:scale-110 duration-150">
            <button className="font-bold text-[20px] text-black w-20 ">
              LOGIN
            </button>
          </div>
        </div>
        </form>
        <div className="flex justify-end px-6 text-white underline ">
          <Link to="/signup" className="hover:scale-110 duration-150">Signup?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
