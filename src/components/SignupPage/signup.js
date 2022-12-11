import React, { useState, useContext } from "react";
import bg from "../../assets/bg.png";
import { Link,useNavigate } from "react-router-dom";
import { firecontext } from "../../store/context";

function Signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { firebase } = useContext(firecontext);
  const navigate=useNavigate();

  const submit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username });
        firebase.firestore().collection("users").add({
          id:result.user.uid,
          username:username,

        }).then(()=>{
          navigate("/")
        })

      
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
      <div className="bg-black/40 w-[20vw] h-[55vh] rounded-[0.5rem]">
        <div className="flex flex-col justify-center items-center text-white ">
          <h className="text-[40px] font-bold ">SIGNUP</h>
          <p className="font-serif">Watch movies!!!!!</p>
        </div>
        <form onSubmit={submit}>
          <div className="flex flex-col gap-3 px-4 mt-9">
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Username"
              className="h-[5vh] rounded-[0.5rem] text-[18px] font-semibold outline-none placeholder-black/40 block px-2"
            />
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
          <div className="flex justify-center items-center mt-6">
            <div className="bg-white/70 rounded-[0.2rem] w-[100px] flex justify-center items-center hover:scale-110 duration-150">
              <button className="font-bold text-[20px] text-black w-[100px]">
                SIGNUP
              </button>
            </div>
          </div>
          <div className="flex justify-end px-5 text-white underline text-[18px]">
            <Link to="/" className="hover:scale-110 duration-150">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
